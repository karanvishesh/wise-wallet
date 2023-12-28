import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor() { }
  estimatedRevenue: Subject<number> = new Subject<number>();

  setRevenue(revenue: number) {
    this.estimatedRevenue.next(revenue);
  }

  getRevenue() {
    return this.estimatedRevenue.asObservable();
  }
}
