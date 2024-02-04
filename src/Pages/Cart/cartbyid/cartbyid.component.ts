import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';
import { Cart } from '../../../Models/cart';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cartbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './cartbyid.component.html',
  styleUrl: './cartbyid.component.css'
})
export class CartbyidComponent {
  cartId?:number =0;
  cartItem:Cart;
  errMsg:string='';
  isCartExist:boolean=false;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };

  constructor(
    private http:HttpClient,
    private router:Router,
    private activateRoute: ActivatedRoute
  ){
    this.cartItem = new Cart();
    this.activateRoute.params.subscribe((p)=> (this.cartId=p['cid']));
    console.log(this.cartId);
    this.search();
  }

  search(){
    this.http
    .get<Cart>('http://localhost:5254/api/Cart/GetByCartId/'+this.cartId,this.httpOptions)
    .subscribe((Response)=>{
      console.log(Response);
      if(Response!=null){
        this.cartItem = Response;
        this.isCartExist = true;
        this.errMsg=' ';
      } else{
        this.errMsg='Invalid Cart Id';
        this.isCartExist=false;
      }
    });
  }

  edit(id:any){
    console.log(id);
    this.http
    .put('http://localhost:5254/api/Cart/UpdateCartItem/'+id,this.cartItem,this.httpOptions)
    .subscribe((Response)=>{
      console.log(Response);
    });
    this.router.navigateByUrl('customerdashboard/getallcart');
  }

}
