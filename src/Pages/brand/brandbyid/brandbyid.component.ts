import { Component } from '@angular/core';
import { Brand } from '../../../Models/brand';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-brandbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './brandbyid.component.html',
  styleUrl: './brandbyid.component.css'
})
export class BrandbyidComponent {
  brandId?: number = 0;
  brand: Brand;
  errMsg: string = '';
  isbrandExist: boolean = false;
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
    this.brand = new Brand();
    
    this.activateRoute.params.subscribe((p) => (this.brandId = p['mid']));
    console.log(this.brandId);
    this.search();
  }
  search() {
    this.http
      .get<Brand>(
        'http://localhost:5254/api/Brand/GetBrandById/' + this.brandId,this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.brand = response;
          this.isbrandExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid User Id';
          this.isbrandExist = false;
        }
      });
  }
    update() {
    this.http
      .put('http://localhost:5254/api/Brand/UpdateBrand', this.brand,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('sellerdashboard/getallbrands');
  }
  delete() {
    this.brandId = this.brand.brandId;
    this.http
      .delete('http://localhost:5254/api/Brand/DeleteBrand/' + this.brandId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('sellerdashboard/getallbrands');
  }

}



