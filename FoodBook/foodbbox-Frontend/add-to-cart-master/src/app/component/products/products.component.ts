import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  SortbyParam = '';
  SortDirection = 'asc';
  productList: Product[] = [];

  totalLength:any;
  page:number=1
  username:string = localStorage.getItem('username');
   //public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService) 
  { 

  }

  ngOnInit(): void {
    this.api.getProductList()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
     this.productList.forEach((a:any) => {
    
      Object.assign(a,{quantity:1,total:a.price});
     });
      this.totalLength=res.length;

      console.log(this.productList)
   });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(cuisine:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.cuisine == cuisine || cuisine ==''){
        return a;
      }
    })
  }
 sort(){
   
 }
 onSortDirection() {
   // productList: Product[] = [];
    if (this.SortDirection == 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }


}

