import { Component } from '@angular/core';
import { Brand } from '../../../Models/brand';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addbrand',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './addbrand.component.html',
  styleUrl: './addbrand.component.css'
})
export class AddbrandComponent {
  brand: Brand;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '+ localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.brand = new Brand();
  }
  addbrand() {
    this.http
      .post('http://localhost:5254/api/Brand/AddBrands', this.brand,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('sellerdshboard/getallbrands'); 
  }

}
