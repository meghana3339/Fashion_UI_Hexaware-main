import {
  HttpClientModule,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../../Models/product';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './uploadimg.component.html',
  styleUrl: './uploadimg.component.css',
})
export class uploadimgComponent {
  progress?: number;
  message?: string;
  products: Product;
  constructor(private http: HttpClient) {
    this.products = new Product();
  }
  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    //Set product image in localstorage
    localStorage.setItem('product_img',fileToUpload.name)
    //this.item.image = fileToUpload.name;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http
      .post('http://localhost:5254/api/Upload', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe({
        next: (event) => {
          if (
            event.type === HttpEventType.UploadProgress &&
            event.total != undefined
          )
            this.progress = Math.round((100 * event.loaded) / event.total);
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
          }
        },
        error: (err: HttpErrorResponse) => console.log(err),
      });
  };
  
}