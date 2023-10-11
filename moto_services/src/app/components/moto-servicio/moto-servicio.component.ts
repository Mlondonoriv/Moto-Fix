import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import{MotosService} from "../../services/moto.service"

@Component({
  selector: 'app-moto-servicio',
  templateUrl: './moto-servicio.component.html',
  styleUrls: ['./moto-servicio.component.css']
})
export class MotoServicioComponent {

  constructor(public motoService:MotosService){}

//  las funciones deben retornar algo , en este caso esta funcion no tiene retorno por eso el voi para que retone vacio, al cargar el componente me ejecute la fucnion 
// getAllMotos en la etapa de montaje 

  ngOnInit(): void{
    this.getAllMotos();
  }

  addMotoService(form:NgForm){

    

    this.motoService.createMoto(form.value).subscribe((res)=>{
      this.getAllMotos();

      console.log("res:",res)
    },(err)=>{

      console.log("err:", err)
    });
  }


  getAllMotos(){

    this.motoService.readAllMotos().subscribe((res)=>{

      this.motoService.Moto_Service_array = res.all_motos;
    },(err)=>{

      console.log("err:", err)
    });

  }

  editMoto(motoService: any){
    this.motoService.SelectedMotoService = motoService;
  }

  removeMoto(id: string | any){

    this.motoService.deleteMoto(id).subscribe
      ((res)=>{

        this.getAllMotos();
      },(err)=>{
  
        console.log("err:", err)
      }


    )
    
  }


  handleSubmitMoto(form:NgForm){

    if(form.value._id){
      this.motoService.updateMoto(form.value).subscribe(
      (res)=>{
        form.reset();
        this.getAllMotos();
        console.log("res:", res)
      },
      (err)=> {
        console.log("err:", err)
      }
      );
    } else {
      this.motoService.createMoto(form.value).subscribe(

        (res)=>{
          form.reset();
          this.getAllMotos;
          console.log("res:", res);
        },
        (err)=>{
          console.log("err:", err)
        }
      )
    }
  }

}
