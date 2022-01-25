import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { PriceListModel } from '../models/pricelistModel.model';
import { PriceListFilterModel } from '../models/priceListFilterModel.model';



@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPriceLists(payload: PriceListFilterModel): Observable<any> {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: { ...payload }
    };

    return this.http.get('pricelist', options)
      .pipe(
        take(1),
        catchError((e) => throwError(e.error || 'server error')));
  }

  updatePriceList(payload: PriceListModel): Observable<any> {
    return this.http.post('pricelist/list', payload)
      .pipe(
        take(1),
        catchError((e) => throwError(e.error || 'server error')));
  }

}

