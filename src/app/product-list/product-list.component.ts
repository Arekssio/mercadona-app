import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../types/product';
import { ProductType } from '../types/product-type';
import { Screw } from '../types/screw';
import {MatDialog} from '@angular/material/dialog';
import { ProductAddDialogComponent } from '../product-add-dialog/product-add-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  protected products: Product[];
  protected columns: any[];
  protected dataSource: any[];
  protected pageSize: number;
  protected pageSizeOptions: number[];
  protected totalItems: number;

  protected get displayedColumns() {
    return this.columns.concat('acciones')
  }

  private productType: ProductType;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) {
    this.products = [];
    this.columns = [];
    this.dataSource = [];
    this.pageSizeOptions = [5, 10, 25, 100];
    this.pageSize = this.pageSizeOptions[0];
    this.totalItems = 0;
    this.productType = ProductType.none;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.productType = data['productType'];

      switch (this.productType) {
        case ProductType.screw:
          // This could be done by returning the total items amount in the response instead of perform 
          // two calls, but had no time for it.
          this.productsService.getScrews().subscribe(screws => {
            this.totalItems = screws.length;
          });

          this.productsService.getScrews(this.pageSize, 0).subscribe(screws => {
            this.dataSource = screws;
            this.columns = Object.keys(screws[0]);
          });
      }
    })
  }

  onPageEvent(event: PageEvent) {
    this.productsService.getScrews(event.pageSize, event.pageIndex).subscribe(screws => {
      this.dataSource = screws;
      this.columns = Object.keys(screws[0]);
    });
  }

  onProductDelete(screw: Screw) {
    this.productsService.removeScrew(screw);

    this.productsService.getScrews(this.pageSize, 0).subscribe(screws => {
      this.dataSource = screws;
      this.columns = Object.keys(screws[0]);
    });
  }

  onAddProduct(): void {
    this.dialog.open(ProductAddDialogComponent).afterClosed().subscribe(() => {
    })
  }
}
