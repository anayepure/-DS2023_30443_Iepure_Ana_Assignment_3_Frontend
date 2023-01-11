import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountUser} from "../models/AccountUser";
import {Device} from "../models/Device";
import {Measurement} from "../models/Measurement";

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private API_SERVER_URL='http://localhost:8090/api/devices';
  constructor(private httpClient: HttpClient) { }

  getAllDevices(): Observable<Device[]>
  {
    return this.httpClient.get<Device[]>(`${this.API_SERVER_URL}`);
  }

  deleteDevice(id: number)
  {
    return this.httpClient.delete(`${this.API_SERVER_URL}/${id}`);
  }

  updateDevice(id: number, device: Device)
  {
    return this.httpClient.put(`${this.API_SERVER_URL}/update/${id}`, device);
  }

  saveDevice(device: Device)
  {
    return this.httpClient.post(`${this.API_SERVER_URL}`, device);
  }

  getMeasurements(id: number): Observable<Measurement[]>
  {
    return this.httpClient.get<Measurement[]>(`${this.API_SERVER_URL}/measurements/${id}`);
  }

  getDeviceById(id: number): Observable<Device>
  {
    return this.httpClient.get<Device>(`${this.API_SERVER_URL}/${id}`);
  }
}
