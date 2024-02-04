import { Component } from '@angular/core';
import { Order } from '../../../Models/order';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { User } from '../../../Models/user';
import * as emailjs from 'emailjs-com';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-placeorder',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceorderComponent {
  
  order: Order;
  currentDate:Date;
  user:User;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router){
    this.order= new Order();
    this.currentDate=new Date();
    this.user = new User();
  }
  placeOrder(){
    //this.order.userId=localStorage.getItem('userId')
    
    
    this.http
    .post('http://localhost:5254/api/Order/PlaceOrder', this.order,this.httpOptions)
    .subscribe((Response) => {
      console.log(Response);
    });
    this.sendEmail1();
    this.sendEmail2();
  this.router.navigateByUrl('placeorder');
  }

  sendEmail1() {
    const templateParams = {
      to_name: this.user.name,
      
      // message_html: New User Registered ${this.users.userName} with mail ${this.users.email},
      message: "Thank you For Ordering in Colours And Shades",
      to_mail: this.user.email
    };
  
    emailjs.init("4ge5mHJTEMHIUsZ3j");
    emailjs.send('service_70wdwbh', 'template_tlod5gj', templateParams)
      .then((response: any) => {
        console.log('Email sent successfully:', response);
      }, (error: any) => {
        console.error('Error sending email:', error);
      });
  }

  sendEmail2() {
    const templateParams = {
      
      
      // message_html: New User Registered ${this.users.userName} with mail ${this.users.email},
      message: "Customer ramjee have ordered an product"
    };
  
    emailjs.init("06TCQEhhC_lLpaQxC");
    emailjs.send('service_2818co8', 'template_ltn5oqr', templateParams)
      .then((response: any) => {
        console.log('Email sent successfully:', response);
      }, (error: any) => {
        console.error('Error sending email:', error);
      });
  }

}
