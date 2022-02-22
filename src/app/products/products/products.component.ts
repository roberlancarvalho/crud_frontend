import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Product } from '../model/product';
import { ConfirmDialogComponent } from './../../shared/components/confirm-dialog/confirm-dialog.component';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Observable<Product[]>;
  displayedColumns = [
    'name',
    'description',
    'price',
    'stock',
    'category',
    'status',
    'buttons',
  ];

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {
    this.products = this.productsService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar produtos.');
        return of([]);
      })
    );

    this.products = this.productsService.list().pipe(
      catchError((msg) => {
        this.openCofirmDialog('Deseja remover este produto?');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  openCofirmDialog(confirmMsg: string) {
    this.dialog.open(ConfirmDialogComponent, {
      data: confirmMsg,
    });
  }

  ngOnInit(): void {}
}
