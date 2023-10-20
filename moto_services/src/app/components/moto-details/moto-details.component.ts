import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import{MotosService} from "../../services/moto.service"



@Component({
  selector: 'app-moto-details',
  templateUrl: './moto-details.component.html',
  styleUrls: ['./moto-details.component.css']
})
export class MotoDetailsComponent {

  constructor(
    private activatedRoute:ActivatedRoute,
    public motoService:MotosService
  ){}

currentMotoDetail = {


  _id:"",
  brand:" ",
  model:" ",
  year: " " ,
  plate:" ",
  name:" ",
  contact_phone:" ",
  email:" ",
  issue_description:" ",

};


ngOnInit(): void{

  this.activatedRoute.params.subscribe((params)=>{
    const motoId = params["id"]

    this.getMoto(motoId);
  });
}

getMoto(id:string,
 )
  
  {
  this.motoService.readMoto(id).subscribe(

    (res) => {
      
      this.currentMotoDetail._id = res. Moto_Service_array;
      console.log('res:', res);
    },
    (err) => {
      console.log(err);
    }



  )
}


}
