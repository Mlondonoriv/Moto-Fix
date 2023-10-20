import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService { // se crea la clase al crear el servicio, creo un servicio para poder hacer una consulta al back , mandar el usuario y poder logearme 

  constructor( private http:HttpClient) { } // haciendo instancia del servicio para poder usarlo 

  login(user: any){
    return this.http.post<any>("http://localhost:5000/login", user ) // esta funcion hace la peticion , todo esto lo hace el metodo HttpClient
  }



  isLogged(){
  
    if (localStorage.getItem('token')){
  
      return true;
    } else{
      return false;
    }
  }
}