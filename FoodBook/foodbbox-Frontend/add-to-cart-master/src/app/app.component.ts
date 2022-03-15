import { Component } from '@angular/core';
import { Product } from './common/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // username:string = localStorage.getItem('username');
 productList: Product[] = [];
  title = 'add-to-cart';
}
