import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MotoServicioComponent } from './components/moto-servicio/moto-servicio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SkelletonTagsComponent } from './components/skelleton-tags/skelleton-tags.component';

import {JwtModule} from "@auth0/angular-jwt";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MotoDetailsComponent } from './components/moto-details/moto-details.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MotoServicioComponent,
    SkelletonTagsComponent,
    MotoDetailsComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
  
    JwtModule.forRoot({
      config:{
        tokenGetter: ()=> localStorage.getItem('token'), // asi debo instaar el modulo para que reciba el token y lo decodifique 
      }
    }),

    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule






  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
