import { Component } from '@angular/core';
import { User } from '../../../Models/user';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-userbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './userbyid.component.html',
  styleUrl: './userbyid.component.css'
})
export class UserbyidComponent {
  userId?: number = 0;
  user: User;
  errMsg: string = '';
  isuserExist: boolean = false;
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
    this.user = new User();
    
    this.activateRoute.params.subscribe((p) => (this.userId = p['pid']));
    console.log(this.userId);
    this.search();
  }
  search() {
    this.http
      .get<User>(
        'http://localhost:5254/api/User/GetUserById?userId=' + this.userId,this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.user = response;
          this.isuserExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid User Id';
          this.isuserExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:5254/api/User/EditUser', this.user,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashoard/getallusers');
  }
  delete() {
    this.userId = this.user.userId;
    this.http
      .delete('http://localhost:5254/api/User/DeleteUser/' + this.userId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallusers');
  }

}