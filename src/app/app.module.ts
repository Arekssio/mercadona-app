import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { ProductsApiService } from './services/products-api.service';
import { ProductsService } from './services/products.service';
import { ProductsSectionComponent } from './products-section/products-section.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductAddDialogComponent } from './product-add-dialog/product-add-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    AppHeaderComponent,
    ProductsSectionComponent,
    ProductListComponent,
    ProductAddDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [ProductsService, ProductsApiService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
