import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Cart } from '../../../Models/cart';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getallcart',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getallcart.component.html',
  styleUrl: './getallcart.component.css'
})
export class GetallcartComponent {
  cartItems:any[]=[];

  quantity:number =0;
  total:number=0;
  totalCartPrice:number=0;

  carts1:any[]= [];
  qty:number=0;
  gtotal: number = 0;
  rowcount: number = 0;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllCartItems();
    
  }
  selectQty(e: any) {
    this.quantity = e.target.value;
  }

  setTotal() {
    this.gtotal = 0; 
    this.rowcount = 0;
    for (let item of this.carts1) {
      this.gtotal += item.totalPrice;
      this.rowcount++;
    }
  }

  getAllCartItems() {
    let userId=localStorage.getItem('userId');
      this.http
        .get<Cart[]>('http://localhost:5254/api/Cart/GetAllCartsByUser/'+ userId,this.httpOptions) 
        .subscribe((response) => {
          
          this.cartItems = response;
          console.log(this.cartItems);
          for (let item of this.cartItems) {

            this.carts1.push({
              cartId:item.cartId,
              productName: item.name,
              price: item.price,
              quantity: item.quantity,
              totalPrice: item.price * item.quantity,
            });
          }
          console.log(this.carts1);
        });
  }

  deleteCartItem(id:any) {
    console.log(id);
    this.http
      .delete('http://localhost:5254/api/Cart/RemoveFromCart/'+id,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
      //this.getAllCartItems();
      //location.reload();
      
  }

  getTotal()
  {
    for(let cart of this.cartItems)
    {
       this.total+=cart.totalPrice;
    }
    return this.total;
  }

  buyProduct()
  {
    this.router.navigateByUrl('placeorder');
  }






}
