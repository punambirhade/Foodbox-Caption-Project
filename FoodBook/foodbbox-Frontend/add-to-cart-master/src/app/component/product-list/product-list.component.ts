import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  searchKey:string ="";
  employees: Product[]=[];
  constructor(private employeeService: ApiService,private cartService : CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();

   
  }

  private getEmployees(){
    this.employeeService.getProductList().subscribe(data => {
      this.employees = data;


    });
  }

  productDetails(id: number){
    this.router.navigate(['product-details', id]);
  }

  updateProduct(id: number){
    this.router.navigate(['update-product', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
