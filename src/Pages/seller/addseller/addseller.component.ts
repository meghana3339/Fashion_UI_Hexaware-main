import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Seller } from '../../../Models/seller';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addseller',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './addseller.component.html',
  styleUrl: './addseller.component.css'
})
export class AddsellerComponent {
  seller: Seller;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.seller = new Seller();
  }
  addSeller() {
    this.http
      .post('http://localhost:5254/api/Seller/RegisterSeller', this.seller,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('sellerlogin'); 
  }

}
