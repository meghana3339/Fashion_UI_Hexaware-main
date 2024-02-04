import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-productbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './productbyid.component.html',
  styleUrl: './productbyid.component.css'
})
export class ProductbyidComponent {
  productId?: number = 0;
  product: Product;
  errMsg: string = '';
  isProductExist: boolean = false;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.product = new Product();
  
    this.activateRoute.params.subscribe((p) => (this.productId = p['pid']));
    console.log(this.productId);
    this.search();
  }

search() {
  this.http
    .get<Product>(
      'http://localhost:5140/api/Product/GetproductbyId/' + this.productId,this.httpOptions
    )
    .subscribe((response) => {
      console.log(response);
      if (response != null) {
        this.product = response;
        this.isProductExist = true;
        this.errMsg = '';
      } else {
        this.errMsg = 'No Product Exist For Given Id';
        this.isProductExist = false;
      }
    });
}
edit() {
  this.http
    .put('http://localhost:5140/api/Product/EditProduct', this.product,this.httpOptions)
    .subscribe((response) => {
      console.log(response);
    });
  this.roter.navigateByUrl('getallproduct');
}
delete() {
  this.productId = this.product.productId;
  this.http
    .delete('http://localhost:5140/api/Product/DeleteProduct/' + this.productId,this.httpOptions)
    .subscribe((response) => {
      console.log(response);
    });
  this.roter.navigateByUrl('getallproduct');
  }



}


