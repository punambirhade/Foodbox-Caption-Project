import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { LoginStatusComponent } from './component/login-status/login-status.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'update-product/:id',component:UpdateProductComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'checkout',component:CheckOutComponent},
  {path:'login-status',component:LoginStatusComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
