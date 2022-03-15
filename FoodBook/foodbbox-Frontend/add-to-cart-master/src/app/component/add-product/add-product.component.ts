import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  constructor(private productService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.productService.createProduct(this.product).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/products']);
  }
  
  onSubmit(){
    console.log(this.product);
    this.saveEmployee();
  }
}