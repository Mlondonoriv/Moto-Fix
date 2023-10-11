import { Injectable } from '@angular/core';
import{HttpClient}from "@angular/common/http";
import{Product} from "../interfaces/schema";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {

    //aca voiy a guardar las tareas creadas 

   
  
  }
  products:Product[] = []; // creo un objeto que llama la clase importado donde voy a guardar las tareas de  mi api
  urlBackend = "http://localhost:5000/products"; 

  selectedProduct:Product = {

    name:"",
    price:null,
  }

// en la funsion recibo el product qu es de tipo Product ( el schema) peticion al api
  createProduct(product:Product){

    return this.http.post(this.urlBackend, product);
  }





  readAllProducts(){}
  readProduct(){}
  updateProduct(){}
  deleteProduct(){}
}
