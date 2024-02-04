import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';
import { Cart } from '../../../Models/cart';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addcart',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './addcart.component.html',
  styleUrl: './addcart.component.css'
})
export class AddcartComponent {
  cartItem:Cart;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http:HttpClient,private router: Router){
    this.cartItem= new Cart();
  }

  addToCart(productId:any,quantity:any){
    this.cartItem.quantity=quantity;
    this.cartItem.productId=productId;
    this.cartItem.userId=localStorage.getItem('userId');
    this.http
    .post('http://localhost:5254/api/Cart/AddToCart',this.cartItem,this.httpOptions)
    .subscribe((Response)=>{
      console.log(Response);
    });
    this.router.navigateByUrl('customerdashboard/getallcart')
  }

}
