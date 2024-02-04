import { Component } from '@angular/core';
import { Order } from '../../../Models/order';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-getorderbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getorderbyid.component.html',
  styleUrl: './getorderbyid.component.css'
})
export class GetorderbyidComponent {
  orderId?: number = 0;
  order: Order;
  errMsg: string = '';
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
    this.order = new Order();
    
    this.activateRoute.params.subscribe((p) => (this.orderId = p['mid']));
    console.log(this.orderId);
    this.search();
  }
  search() {
    console.log(this.order);
    this.http
      .get<Order>(
        'http://localhost:5254/api/Order/GetOrderById/' + this.orderId,this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.order = response;
          this.isorderExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid order Id';
          this.isorderExist = false;
        }
      });

}
}


