import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // importando modulo para hacer y leer forms 
import {HttpClientModule} from '@angular/common/http'; // importando servidor de angular 

import { ToastrModule } from 'ngx-toastr';// generar avisos pop up en navegador 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//corresponde al toastr


import { JwtModule } from '@auth0/angular-jwt'; // decodificar tkens 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { CategoriesComponent } from './components/categories/categories.component';

import { CombosComponent } from './components/combos/combos.component';
import { DressingsComponent } from './components/dressings/dressings.component';
import { DipsComponent } from './components/dips/dips.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TopTagsComponent } from './components/top-tags/top-tags.component';
import { BottomTagsComponent } from './components/bottom-tags/bottom-tags.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LISTSComponent } from './components/lists/lists.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    PageNotFoundComponent,
    
    CategoriesComponent,
        
         CombosComponent,
         DressingsComponent,
         DipsComponent,
         AllProductsComponent,
         ContactUsComponent,
         TopTagsComponent,
         BottomTagsComponent,
         FavoritesComponent,
         LISTSComponent,
         
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // modulo importado
    HttpClientModule, // modulos impiortado

    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,

   
    JwtModule.forRoot({
      config:{
        tokenGetter: ()=> localStorage.getItem('token'), // asi debo instaar el modulo para que reciba el token y lo decodifique 
      }
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
