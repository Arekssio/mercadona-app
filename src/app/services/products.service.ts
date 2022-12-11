import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Screw } from '../types/screw';
import { ProductsApiService } from './products-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private productsApiService: ProductsApiService) { }

  getScrews(pageSize?: number, pageNumber?: number): Observable<Screw[]> {
    return this.productsApiService.fetchScrews(pageSize, pageNumber);
  }
}
