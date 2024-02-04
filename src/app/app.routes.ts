import { Routes } from '@angular/router';
import { AdduserComponent } from '../Pages/User/adduser/adduser.component';
import { GetallUsersComponent } from '../Pages/User/getallusers/getallusers.component';
import { UserbyidComponent } from '../Pages/User/userbyid/userbyid.component';
import { GetallsellersComponent } from '../Pages/seller/getallsellers/getallsellers.component';
import { SellerbyidComponent } from '../Pages/seller/sellerbyid/sellerbyid.component';
import { AddsellerComponent } from '../Pages/seller/addseller/addseller.component';
import { AddproductComponent } from '../Pages/product/addproduct/addproduct.component';
import { GetallproductsComponent } from '../Pages/product/getallproducts/getallproducts.component';
import { ProductbyidComponent } from '../Pages/product/productbyid/productbyid.component';
import { AddbrandComponent } from '../Pages/brand/addbrand/addbrand.component';
import { GetallbrandsComponent } from '../Pages/brand/getallbrands/getallbrands.component';
import { BrandbyidComponent } from '../Pages/brand/brandbyid/brandbyid.component';
// import { GetallavailabilitiesComponent } from '../Pages/availability/getallavailabilities/getallavailabilities.component';
import { Availability } from '../Models/availability';
// import { AvailabilitybyidComponent } from '../Pages/availability/availabilitybyid/availabilitybyid.component';
import { GetorderbyidComponent } from '../Pages/order/getorderbyid/getorderbyid.component';
import { GetordersComponent } from '../Pages/order/getorders/getorders.component';
import { LoginComponent } from '../Pages/login/login/login.component';
import { AdminDashboardComponent } from '../Pages/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from '../Pages/customer-dashboard/customerdashboard/customerdashboard.component';
import { PlaceorderComponent } from '../Pages/order/placeorder/placeorder.component';
import { SellerDashboardComponent } from '../Pages/seller-dashboard/seller-dashboard.component';
// import { RegisterComponent } from '../Pages/User/register/register.component';
import { UserRatingComponent } from '../Pages/User Rating/user-rating/userrating.component';
import { UserRatingbyidComponent } from '../Pages/User Rating/user-ratingbyid/user-ratingbyid.component';
import { ProductbynameComponent } from '../Pages/product/productbyname/productbyname.component';
import { SellerloginComponent } from '../Pages/sellerlogin/sellerlogin.component';
import { GetorderbyuseridComponent } from '../Pages/order/getorderbyuserid/getorderbyuserid.component';
import { AddcartComponent } from '../Pages/Cart/addcart/addcart.component';
import { GetallcartComponent } from '../Pages/Cart/getallcart/getallcart.component';
import { CartbyidComponent } from '../Pages/Cart/cartbyid/cartbyid.component';
import { uploadimgComponent } from '../Pages/uploadimg/uploadimg.component';
import { HomeComponent } from './home/home.component';



 


export const routes: Routes = [
    {path:'adduser',component:AdduserComponent},
    {path:'home',component:HomeComponent},
    
    {path:'getallusers',component:GetallUsersComponent},
    {path:'userbyid',component:UserbyidComponent},
    {path:'uploadimg',component:uploadimgComponent},
    {path:'addcart',component:AddcartComponent},
    {path:'getallcart',component:GetallcartComponent},
    {path:'cartbyid',component:CartbyidComponent},
    {path:'addseller',component:AddsellerComponent},
    {path:'orderbyuserid',component:GetorderbyuseridComponent},
    {path:'getallsellers',component:GetallsellersComponent},
    {path:'sellerbyid',component:SellerbyidComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'getallproducts',component:GetallproductsComponent},
    {path:'userrating',component:UserRatingComponent},
    {path:'userratingbyid',component:UserRatingbyidComponent},
    {path:'productbyid',component:ProductbyidComponent},
    {path:'addbrand',component:AddbrandComponent},
    {path:'searchproduct',component:ProductbynameComponent},
    {path:'sellerlogin',component:SellerloginComponent},
    // {path:'register',component:RegisterComponent},
    {path:'getallbrands',component:GetallbrandsComponent},
    {path:'brandbyid',component:BrandbyidComponent},
    // {path:'getallavailabilities',component:GetallavailabilitiesComponent},
    // {path:'availabilitybyid',component:AvailabilitybyidComponent},
    {path:'getorderbyid',component:GetorderbyidComponent},
    {path:'getorders',component:GetordersComponent},
    {path:'login',component:LoginComponent},
    {path:'placeorder',component:PlaceorderComponent},
    {path:'admindashboard',component:AdminDashboardComponent,
    children:[
        {path:'getorders',component:GetordersComponent},
          {path:'getorderbyid',component:GetorderbyidComponent},
          {path:'getallsellers',component:GetallsellersComponent},
          {path:'sellerbyid',component:SellerbyidComponent},
          {path:'getallusers',component:GetallUsersComponent},
          {path:'login',component:LoginComponent},
          {path:'getallbrands',component:GetallbrandsComponent},
          {path:'orderbyuserid',component:GetorderbyuseridComponent},
          {path:'userbyid',component:UserbyidComponent},
        ],},
    {path:'customerdashboard',component:CustomerDashboardComponent,
children:[
    {path:'getallproducts',component:GetallproductsComponent},
    {path:'productbyid',component:ProductbyidComponent},
    {path:'searchproduct',component:ProductbynameComponent},
    {path:'orderbyuserid',component:GetorderbyuseridComponent},
    {path:'login',component:LoginComponent},
    {path:'userratingsbyid',component:UserRatingbyidComponent},
    {path:'getallcart',component:GetallcartComponent}
]},
    {path:'sellerdashboard',component:SellerDashboardComponent,
    children:[
        {path: 'Edit',component:SellerbyidComponent},
        {path:'addbrand',component:AddbrandComponent},
        {path:'getallbrands',component:GetallbrandsComponent},
        {path:'addproduct',component:AddproductComponent},
        {path:'getallproducts',component:GetallproductsComponent},
        {path:'productbyid',component:ProductbyidComponent},
        {path:'getcartbyid',component:CartbyidComponent},
        {path: 'login',component:LoginComponent},
        
    ],},

];
