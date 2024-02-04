import { Component } from '@angular/core';
import { Seller } from '../../Models/seller';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sellerlogin',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './sellerlogin.component.html',
  styleUrl: './sellerlogin.component.css'
})
export class SellerloginComponent {
  seller:Seller;
  email: string = '';
  password: string = '';
  errMsg: string = '';
  httpResponse: any;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.seller = new Seller();
  }
  
  onSubmit():void {
    let login={Email: this.email, Password: this.password};
    this.http
    .post('http://localhost:5254/api/User/Validate',login,this.httpOptions)
    .subscribe((Response)=> {
      this.httpResponse = Response;
      console.log(this.httpResponse);
      if(this.httpResponse.token !=null)  {
        localStorage.setItem('token',this.httpResponse.token);
        localStorage.setItem('userId',this.httpResponse.userId);
        this.router.navigateByUrl('sellerdashboard');
        // if(this.httpResponse.roleName == 'Seller'){
        //   this.router.navigateByUrl('sellerdashboard');
        // }
      }
      else{
        this.errMsg = 'Invalid Credentials';
        console.log(this.errMsg);
      }
    });
  }

  onReset(form:NgForm): void{
    form.reset();
  }

}
