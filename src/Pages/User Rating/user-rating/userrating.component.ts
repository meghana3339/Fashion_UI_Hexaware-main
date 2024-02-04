import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRatings } from '../../../Models/user-ratings';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userrating',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './userrating.component.html',
  styleUrl: './userrating.component.css'
})
export class UserRatingComponent {
  userrating:UserRatings;
  userRatingsId?:number =0;

  constructor(private http: HttpClient, private router: Router){
    this.userrating=new UserRatings();
  }

  submit()
  {
    console.log(this.userrating);
    this.http
    .post('http://localhost:5254/api/UserRatings/SubmitRating',this.userrating)
    .subscribe((Response)=>{
      console.log(Response);
    });
    console.log("Rating is Saved");
  }
  
  
  


}
