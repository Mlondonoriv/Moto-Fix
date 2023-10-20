
import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private jwtHelper: JwtHelperService,
  ) {}

  user = {
    email: '',
    password: '',
  };
  login() {
    if (!this.user.email || !this.user.password) {
      this.toastr.info('Todos los campos deben ser diligenciados', 'ERROR');
    } else {
      this.loginService.login(this.user).subscribe(
        (res) => {
          if (res.token) {
            const decoded = this.jwtHelper.decodeToken(res.token);

            console.log(this.jwtHelper)
            this.toastr.success(`Hola, ${decoded.name}!`, 'Bienvenido');

            localStorage.setItem('token', res.token);

            this.router.navigate(['/moto-servicio']);
          } else {
            this.toastr.warning(`${res.message}`, 'ERROR');
          }
        },
        (err) => {
          this.toastr.error(
            'A ocurrido un error, por favor intentar mas tarde ',
            'ERROR'
          );
        }
      );
    }
  }
}


