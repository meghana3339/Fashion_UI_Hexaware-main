import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './seller-dashboard.component.html',
  styleUrl: './seller-dashboard.component.css'
})
export class SellerDashboardComponent {

}
