import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mymodel } from './model';


@Injectable()
export class WrapperserviceService {

  constructor(private _http: HttpClient) { }
  baseurl: string = 'https://api.coingecko.com/api/v3/coins/';

  getall() {
    return this._http.get<mymodel>(this.baseurl);
  }


}