import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cart } from '../../../Models/cart';
import { Order } from '../../../Models/order';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-productbyname',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './productbyname.component.html',
  styleUrl: './productbyname.component.css'
})
export class ProductbynameComponent {
  name?:string='';
  products:Product[]=[];
  grid=true;
  cart:any=0;
  quantityOptions:number[]=[1,2,3,4,5,6,7,8];
  qty:number=1;
  cartItem:Cart;
  errMsg: string='';
  isProductExist:boolean=false;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute

  ){
    //this.product = new Product();
    this.activateRoute.params.subscribe((p)=> (this.name=p['pid']));
    console.log(this.name);
    this.search();
    this.cartItem =new Cart();
    const Qty=this.qty;
  }

  search(){
    this.http
    .get<Product[]>('http://localhost:5254/api/Product/Searchbyname?productName=' + this.name,this.httpOptions)
    .subscribe((Response) => {
      console.log(Response);
      if(Response !=null){
        this.products = Response;
        console.log(this.products);
        this.isProductExist=true;
        this.errMsg='';
      } else{
        this.errMsg='No Product Exist';
        this.isProductExist=false;
      }
    });
  }
  selectQty(e: any) {
    this.qty = e.target.value;
    console.log(this.qty);
  }




  addToCart(productID:any) {
    this.cartItem.quantity=this.qty;
    this.cartItem.productId=productID;
    this.cartItem.userId=localStorage.getItem('userId');
    
    console.log(this.cartItem);
    this.http
      .post('http://localhost:5254/api/Cart/AddToCart', this.cartItem,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    
    this.router.navigateByUrl('customerdashboard/getallcart');
  }

  

}