import { Component } from '@angular/core';
import { Order } from '../../../Models/order';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { UserRatings } from '../../../Models/user-ratings';
@Component({
  selector: 'app-getorderbyuserid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getorderbyuserid.component.html',
  styleUrl: './getorderbyuserid.component.css'
})
export class GetorderbyuseridComponent {
  userId?:any;
  order: Order[]=[];
  errMsg: string = '';
  grid=true;

  userrating:any;
  rating:UserRatings;
  isorderExist: boolean = false;
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
    //this.order = new Order();
    
    this.activateRoute.params.subscribe((p) => (this.userId = p['mid']));
    console.log(this.userId);
    this.search();
    this.rating = new UserRatings();
  }
  search() {
    //this.order.userId=localStorage.getItem('userId');
    
    console.log(this.order);
    this.http
      .get<Order[]>(
        'http://localhost:5254/api/Order/GetOrdersByUser/' +this.userId,this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        
        if (response != null) {
          this.order = response;
          console.log(this.order)
          this.isorderExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid order Id';
          this.isorderExist = false;
        }
      });

  }

  submit()
  {
    console.log(this.rating);
    this.http
    .post('http://localhost:5254/api/UserRatings/SubmitRating',this.rating)
    .subscribe((Response)=>{
      console.log(Response);
    });
  }

}
