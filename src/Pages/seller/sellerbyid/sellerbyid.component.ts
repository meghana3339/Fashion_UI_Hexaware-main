import { Component } from '@angular/core';
import { Seller } from '../../../Models/seller';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-sellerbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './sellerbyid.component.html',
  styleUrl: './sellerbyid.component.css'
})
export class SellerbyidComponent {
  userId?: number = 0;
  seller: Seller;
  errMsg: string = '';
  issellerExist: boolean = false;
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
    this.seller = new Seller();
    
    this.activateRoute.params.subscribe((p) => (this.userId = p['mid']));
    console.log(this.userId);
    this.search();
  }
  search() {
    this.http
      .get<Seller>(
        'http://localhost:5254/api/Seller/GetSellerById/' + this.userId,this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.seller = response;
          this.issellerExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Seller Id';
          this.issellerExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:5254/api/Seller/EditSeller', this.seller,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashbaord/getallsellers');
  }
  delete() {
    this.userId = this.seller.userId;
    this.http
      .delete('http://localhost:5254/api/Seller/DeleteSeller/' + this.userId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallsellers');
  }

}




