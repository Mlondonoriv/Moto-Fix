import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { Motos } from '../interfaces/motoSchema';
// import{} from "../interfaces"

@Injectable({
  providedIn: 'root'
})
export class MotosService {

  

  constructor(private http:HttpClient) {

   }
   urlBackend = "http://localhost:5000/motos"; 
   Moto_Service_array:Motos[] = []; // creo un objeto que llama la clase importado donde voy a guardar las tareas de  mi api
 
   SelectedMotoService:Motos = {
 
    brand:" ",
    model:" ",
    year: null ,
    plate:" ",
    name:" ",
    contact_phone:" ",
    email:" ",
    issue_description:" ",
   }
 
 // en la funcion recibo el product qu es de tipo Product ( el schema) peticion al api
   createMoto(moto:Motos){
 
     return this.http.post(this.urlBackend, moto);
   }
 
 
   readAllMotos(){
    return this.http.get<any>(this.urlBackend);
   }




   readProduct(){}


   updateMoto(moto:Motos ){

    return this.http.put(`${this.urlBackend}/${moto._id}`,moto)
   }




   deleteMoto(id: string){

    return this.http.delete(`${this.urlBackend}/${id}`)
   }


}
