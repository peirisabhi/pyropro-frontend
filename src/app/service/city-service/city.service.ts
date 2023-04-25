import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {City} from "../../model/city-model/city";
import {VehicleCategory} from "../../model/vehicle-category-model/vehicle-category";

let apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient : HttpClient) { }

  saveCity(city : City): Observable<City>{
    return  this.httpClient.post<City>(apiURL+"city", city);
  }

  getCities(): Observable<City[]>{
    return this.httpClient.get<City[]>(apiURL + 'city');
  }
}
