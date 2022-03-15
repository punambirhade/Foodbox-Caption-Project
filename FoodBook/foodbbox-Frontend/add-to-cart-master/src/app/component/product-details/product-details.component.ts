import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: number
  employee: Product
  constructor(private route: ActivatedRoute, private employeService: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Product();
    this.employeService.getProductById(this.id).subscribe( data => {
      this.employee = data;
    });
  }


}
