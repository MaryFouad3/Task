import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.css']
})
export class FavoriteProductComponent implements OnInit {

  @Input() favoriteproducts: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
