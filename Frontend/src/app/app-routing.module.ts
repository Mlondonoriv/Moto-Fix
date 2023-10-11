import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { CombosComponent } from './components/combos/combos.component';
import { DressingsComponent } from './components/dressings/dressings.component';
import { DipsComponent } from './components/dips/dips.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
// import { authGuard } from './guards/auth.guard';
import { FavoritesComponent } from './components/favorites/favorites.component';

import { LISTSComponent } from './components/lists/lists.component';

const routes: Routes = [
  { path: 'favoritos', component: FavoritesComponent },
  // {path:"favoritos",component:FavoritesComponent, canActivate:[authGuard]},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },

  { path: 'categories', component: CategoriesComponent },
  { path: 'combos', component: CombosComponent },
  { path: 'dressings', component: DressingsComponent },
  { path: 'dips', component: DipsComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent }, // rutas para mis diferentes compoenentes
  {path: 'lists', component:LISTSComponent} // el string es la ruta que va dentro de url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
