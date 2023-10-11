import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import{ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
constructor(public productService:ProductsService){}
 

  addProduct(form:NgForm){
    
    this.productService.createProduct(form.value).subscribe((res)=>{

console.log("res:", res)
    },(err)=>{

  console.log("err:",err)    
    });
    
  }




}
