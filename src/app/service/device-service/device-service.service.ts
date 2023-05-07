import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user-model/user";
import {Observable} from "rxjs";
import {Device} from "../../model/device-model/device";

let apiURL = environment.authServiceURL;
@Injectable({
  providedIn: 'root'
})
export class DeviceServiceService {

  constructor(private httpClient : HttpClient) { }

  saveDevice(device : Device): Observable<Device>{
    return  this.httpClient.post<User>(apiURL+"device", device);
  }

}
