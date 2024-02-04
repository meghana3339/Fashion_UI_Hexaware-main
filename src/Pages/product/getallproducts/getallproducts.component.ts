import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../Models/product';
import { Order } from '../../../Models/order';
import { Cart } from '../../../Models/cart';
import { uploadimgComponent } from '../../uploadimg/uploadimg.component';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-getallproducts',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,uploadimgComponent],
  templateUrl: './getallproducts.component.html',
  styleUrl: './getallproducts.component.css'
})
export class GetallproductsComponent {
  products: Product[]=[];
  cart:any=0;
  cartItem:Cart;
 
  grid=true;
  selectedProduct:any;
  quantityOptions:number[]=[1,2,3,4,5,6,7,8];
  qty:number=1;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router){

    this.getAllProducts();
    this.cartItem =new Cart();
    const Qty=this.qty;

  }
  getAllProducts() {
      
    this.http
    .get<Product[]>('http://localhost:5254/api/Product/GetAllProducts',this.httpOptions)
    .subscribe((response) =>
    {
            this.products = response;
            console.log(this.products);
            //this.getAllProducts();
            //this.products.image=localStorage.getItem('uploadimg')
    });

    }
    selectQty(e: any) {
      this.qty = e.target.value;
      console.log(this.qty);
    }
  

  sortProduct(order:any){
      this.http
      .get<Product[]>('http://localhost:5254/api/Product/SortingProducts?SortOrder='+order,this.httpOptions)
      .subscribe((Response)=> {
        this.products = Response;
        console.log(this.products);
        //this.sortProduct(order);

      });
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
      //location.reload();
    }

   


    
      
    // placeOrder(){
    //   const userId=localStorage.getItem('userId');
    //   const productId=localStorage.getItem('productId')
    //   const orderApiUrl='http://localhost:5254/api/Order/PlaceOrder';
    //   const Orderdata={
    //     userId:userId,
    //     productId:this.selectedProduct.productId,
    //     orderDate: new Date(),
    //     price:this.selectedProduct.price
    //     // quantity:selectedProduct.quantity,
    //     // totalPrice:selectedProduct.quantity*selectedProduct.price



    //   };
    //   console.log(Orderdata);
      
    //   this.http
    //   .post(orderApiUrl,Orderdata)
    //   .subscribe((Response)=>{
    //     console.log('Order Placed successully',Response);
    //     this.router.navigateByUrl('getorders');
    //   },
    //   (error)=>{
    //     console.error('Error Placing Order',error);
    //   }
    //   );
      


    // }

  }


