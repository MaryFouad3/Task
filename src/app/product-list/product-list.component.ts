import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productservice : ProductService) { }

  products?: any[];
  favoriteProducts: any[]=[];
  ngOnInit(): void {
    this.products=this.productservice.getAllproduct();
  }

  print(product:any){
    this.favoriteProducts.push(product);
  }

}
