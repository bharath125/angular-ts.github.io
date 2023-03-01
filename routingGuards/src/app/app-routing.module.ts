import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceGuard } from './auth-service.guard';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { ProductGuardGuard } from './product-guard.guard';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component:LoginComponent},
  { path: 'product', component: ProductComponent, canActivate :[AuthServiceGuard],
   canActivateChild : [AuthServiceGuard],
  children: [
  {  path: 'view/:id', component: ProductViewComponent  },
  {  path: 'edit/:id', component: ProductEditComponent  },
  {  path: 'add', component: ProductAddComponent }
  ]  },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
