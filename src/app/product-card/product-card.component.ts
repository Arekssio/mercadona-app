import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { ProductType } from '../types/product-type';
import { Screw } from '../types/screw';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  protected screws: Screw[];

  constructor(private productsService: ProductsService, private router: Router) {
    this.screws = [];
  }

  ngOnInit(): void {
    this.productsService.getScrews().subscribe((screws) => {
      this.screws = screws;
    })
  }

  onCheckButtonClicked(): void {
    this.router.navigateByUrl('/screws', { state: { productType: ProductType.screw } });
  }

}
