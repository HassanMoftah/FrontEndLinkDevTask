
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { CustomerProductsComponent } from './components/customer-products/customer-products.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminGaurd } from './Guards/AdminGuard';
const routes: Routes = [
  {path: '', redirectTo: '/Home/CProducts', pathMatch:'full'},
  {path: 'Home', component:HomeComponent, children:[
  {path: '', redirectTo: '/Home/CProducts', pathMatch: 'full'},
  {path:'CProducts',component:CustomerProductsComponent},
  {path:'DProducts',component:AdminProductsComponent,canActivate:[AdminGaurd]},
  {path:'Orders',component:OrdersComponent,canActivate:[AdminGaurd]}
  ]}, 
  {path :'Signin',component:SigninComponent},
  {path: 'Register', component:RegisterComponent}
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }