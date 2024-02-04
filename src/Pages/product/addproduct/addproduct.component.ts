import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { uploadimgComponent } from '../../uploadimg/uploadimg.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,uploadimgComponent],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  products: Product;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.products = new Product();
  }
  addProduct() {
    console.log(this.products);
    this.http
      .post('http://localhost:5254/api/Product/AddProduct', this.products,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('sellerdashboard/getallproducts'); 
  }

  save(){
    this.products.image=localStorage.getItem('product_img');
    console.log(this.products);
    this.http
    .post('',this.products)
    .subscribe((Response)=>{
      console.log(Response);
    });
  }





}
