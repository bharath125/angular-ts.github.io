import { Component } from '@angular/core';
import { Product } from './procuct';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'srvandep';

  products!:Product[];
  

  constructor(private ProductService:ProductService){
    
  }

  getProducts(){
    this.products=this.ProductService.getProducts();
  }
}

