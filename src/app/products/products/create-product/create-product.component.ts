import { ProductsService } from './../../services/products.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  // product: Product = {
  //   name: null,

  // };

  constructor(productService: ProductsService, fb: FormBuilder) {
    this.form = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {}

  // saveProduct(): void {
  //   console.log('Nome:');
  //   alert(this.product.name + 'Salvo com sucesso');
  // }
}
