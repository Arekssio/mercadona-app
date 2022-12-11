import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsSectionComponent } from './products-section/products-section.component';
import { ProductType } from './types/product-type';

const routes: Routes = [{ path: '', component: ProductsSectionComponent }, { path: 'screws', component: ProductListComponent, data: { productType: ProductType.screw } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
