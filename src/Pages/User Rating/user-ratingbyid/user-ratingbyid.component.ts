import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRatings } from '../../../Models/user-ratings';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-ratingbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule 
  ],
  templateUrl: './user-ratingbyid.component.html',
  styleUrl: './user-ratingbyid.component.css'
})
export class UserRatingbyidComponent {
  userId?:number=0;
  userrating:UserRatings[]=[];
  errMsg:string='';
  grid=true
  isratingExist:boolean=false;

  constructor(private http:HttpClient,private router:Router ,private activatedRoute:ActivatedRoute )
  {
    //this.userrating=new UserRatings;
    this.activatedRoute.params.subscribe((u)=>(this.userId = u['pid']));
    console.log(this.userId);
    this.search();

    
  }

  search(){
    console.log(this.userrating);
    this.http
    .get<UserRatings[]>('http://localhost:5254/api/UserRatings/GetByUser?userId='+this.userId)
    .subscribe((Response)=>{
      console.log(Response);
      if(Response!=null)
      {
        this.userrating=Response;
        this.isratingExist=true;
        this.errMsg='';
      }
      else{
        this.errMsg='invalid User id';
        this.isratingExist=false;
      }
    });
  }
  

  

}
