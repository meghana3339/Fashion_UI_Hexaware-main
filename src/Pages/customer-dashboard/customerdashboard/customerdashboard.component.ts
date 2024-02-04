import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './customerdashboard.component.html',
  styleUrl: './customerdashboard.component.css',
})
export class CustomerDashboardComponent {}