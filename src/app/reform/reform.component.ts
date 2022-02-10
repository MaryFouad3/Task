import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-reform',
  templateUrl: './reform.component.html',
  styleUrls: ['./reform.component.css']
})
export class ReformComponent implements OnInit {

  constructor(private ProductService:ProductService) { }
  product = new FormGroup(
    {
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        image:new FormControl('',Validators.required)
    },

  )
  ngOnInit(): void {
  }
  get title() {
    return this.product.get("title") as FormControl;
  }
  get description() {
    return this.product.get("description") as FormControl;
  }
  get image() {
    return this.product.get("image") as FormControl;
  }
  addproduct(product: any) {
    this.ProductService.addnewproduct(product);
    // console.log(product);
  }

}
