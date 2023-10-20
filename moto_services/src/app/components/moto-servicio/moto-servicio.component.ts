import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

import { MotosService } from '../../services/moto.service';
import { Motos } from 'src/app/interfaces/motoSchema';

@Component({
  selector: 'app-moto-servicio',
  templateUrl: './moto-servicio.component.html',
  styleUrls: ['./moto-servicio.component.css'],
})
export class MotoServicioComponent {
  constructor(
    public motoService: MotosService,
    public toastr: ToastrService,
    private jwtHelper: JwtHelperService
  ) {}

  //  las funciones deben retornar algo , en este caso esta funcion no tiene retorno por eso el voi para que retone vacio, al cargar el componente me ejecute la fucnion
  // getAllMotos en la etapa de montaje





  ngOnInit(): void {
    this.getAllMotos();
  }

  getUserName() {
    const token: any = localStorage.getItem('token');
    const decoded = this.jwtHelper.decodeToken(token);
    return decoded.name;
  }

  handleSubmitMoto(form: NgForm) {
    if (form.value._id) {
      this.motoService.updateMoto(form.value).subscribe(
        (res) => {
         
          this.getAllMotos();
          
          this.toastr.success('Servicio Actualizado con éxito!');
        },
        (err) => {
          this.toastr.error('Ocurrió un error , intenta nuevamente');
        }
      );
    } else {
      if(!this.motoService.SelectedMotoService.brand ||
        !this.motoService.SelectedMotoService.contact_phone ||
        !this.motoService.SelectedMotoService.email ||
        !this.motoService.SelectedMotoService.issue_description ||
        !this.motoService.SelectedMotoService.model ||
        !this.motoService.SelectedMotoService.name ||
        !this.motoService.SelectedMotoService.plate ||
        !this.motoService.SelectedMotoService.year ){

          this.toastr.error('Todos los campos deben ser diligenciados ');
        } else{

          this.motoService.createMoto(form.value).subscribe(
            (res) => {
              
             
              this.getAllMotos;
              this.toastr.success('Servicio creado con éxito!');
              setTimeout(() => {
                location.reload();
              }, 2000);
            },
            (err) => {
              this.toastr.error('Ocurrió un error , intenta nuevamente');
            }
          );
        }
  
    }
  }

  updateByModal(moto: Motos) {
    this.motoService.updateMoto(moto).subscribe(
      (res) => {
        this.toastr.success('Servicio Actualizado con éxito!');

        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (err) => {
        console.log(err);
        this.toastr.error('Ocurrió un error , intenta nuevamente');

        setTimeout(() => {
          location.reload();
        }, 1000);
      }
      
    );
  }

  addMotoService(form: NgForm) {
    this.motoService.createMoto(form.value).subscribe(
      (res) => {
        this.getAllMotos();

        console.log('res:', res);
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  getAllMotos() {
    this.motoService.readAllMotos().subscribe(
      (res) => {
        this.motoService.Moto_Service_array = res.all_motos;
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  viewMoto(motoService: any) {
    this.motoService.SelectedMotoService = motoService;
  }

  editMoto(motoService: any) {
    this.motoService.SelectedMotoService = motoService;
  }

  removeMoto(id: string | any) {
    this.motoService.deleteMoto(id).subscribe(
      (res) => {
        
        this.toastr.success('El servicio se ha eliminado con éxito!');
        setTimeout(() => {
          location.reload();
        }, 1500);
        this.getAllMotos();
      },
      (err) => {
        this.toastr.error('Ocurrió un error , intenta nuevamente');
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
    this.motoService.SelectedMotoService = {
      brand: '',
      model: '',
      year: "",
      plate: '',
      name: '',
      contact_phone: '',
      email: '',
      issue_description: '',
    };
    this.getAllMotos();
  }
}
