import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Screw } from '../types/screw';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  private availableScrews: Screw[];

  constructor() {
    this.availableScrews = [{
      name: 'Screw A',
      price: 5.99,
      format: 'Format A',
      manufacturer: 'Manufacturer A'
    },
    {
      name: 'Screw B',
      price: 5.99,
      format: 'Format B',
      manufacturer: 'Manufacturer B'
    },
    {
      name: 'Screw C',
      price: 5.99,
      format: 'Format C',
      manufacturer: 'Manufacturer C'
    },
    {
      name: 'Screw D',
      price: 5.99,
      format: 'Format D',
      manufacturer: 'Manufacturer D'
    },
    {
      name: 'Screw E',
      price: 5.99,
      format: 'Format E',
      manufacturer: 'Manufacturer E'
    }, {
      name: 'Screw F',
      price: 5.99,
      format: 'Format F',
      manufacturer: 'Manufacturer F'
    }, {
      name: 'Screw G',
      price: 5.99,
      format: 'Format G',
      manufacturer: 'Manufacturer G'
    }, {
      name: 'Screw H',
      price: 5.99,
      format: 'Format H',
      manufacturer: 'Manufacturer H'
    }, {
      name: 'Screw I',
      price: 5.99,
      format: 'Format I',
      manufacturer: 'Manufacturer I'
    }, {
      name: 'Screw J',
      price: 5.99,
      format: 'Format J',
      manufacturer: 'Manufacturer J'
    }, {
      name: 'Screw K',
      price: 5.99,
      format: 'Format K',
      manufacturer: 'Manufacturer K'
    }, {
      name: 'Screw L',
      price: 5.99,
      format: 'Format L',
      manufacturer: 'Manufacturer L'
    }, {
      name: 'Screw M',
      price: 5.99,
      format: 'Format M',
      manufacturer: 'Manufacturer M'
    }, {
      name: 'Screw N',
      price: 5.99,
      format: 'Format N',
      manufacturer: 'Manufacturer N'
    }, {
      name: 'Screw O',
      price: 5.99,
      format: 'Format O',
      manufacturer: 'Manufacturer O'
    }]
  }

  fetchScrews(pageSize?: number, pageNumber?: number): Observable<Screw[]> {
    if (pageSize !== undefined && pageNumber !== undefined) {
      const start = pageSize * pageNumber;
      const end = start + pageSize;
      const part = this.availableScrews.slice(start, end);
      return of(part)
    }

    return of(this.availableScrews)
  }

  removeScrew(screw: Screw) {
    this.availableScrews = this.availableScrews.filter(item => item !== screw);
  }
}
