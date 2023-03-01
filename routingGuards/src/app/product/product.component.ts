import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products?:Product[];
   
   constructor(private productService:ProductService){
   }
 
   ngOnInit() {
     
     this.productService.getProducts().subscribe(data=>{this.products=data})
   }
}
