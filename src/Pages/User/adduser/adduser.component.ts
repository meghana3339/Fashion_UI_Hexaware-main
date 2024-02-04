import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { User } from '../../../Models/user';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import * as emailjs from 'emailjs-com'
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  user: User;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }
  addUser() {
    console.log(this.user);
    this.sendEmail();
    this.http
      .post('http://localhost:5254/api/User/Register', this.user,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('login'); 
  }

  sendEmail() {
    const templateParams = {
      to_name: this.user.name,
      
      // message_html: New User Registered ${this.users.userName} with mail ${this.users.email},
      message: "Thank you For Registering To Colours And Shades",
      to_mail: this.user.email
    };
  
    emailjs.init("4ge5mHJTEMHIUsZ3j");
    emailjs.send('service_vdhgtsq', 'template_dhz7q0d', templateParams)
      .then((response: any) => {
        console.log('Email sent successfully:', response);
      }, (error: any) => {
        console.error('Error sending email:', error);
      });
  }
  

}