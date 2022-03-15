import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';

import { RegisterComponent } from './component/register/register.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortPipe } from './shared/sort.pipe';
import { LoginStatusComponent } from './component/login-status/login-status.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    LoginComponent,

    RegisterComponent,
    AdminloginComponent,
    LogoutComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CheckOutComponent,
    SortPipe,
    LoginStatusComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
