import { Injectable } from '@angular/core';
import {AccountUser} from "../models/AccountUser";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Device} from "../models/Device";

@Injectable({
  providedIn: 'root'
})
export class AccountusersService {
  private API_SERVER_URL='http://localhost:8090/api/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<AccountUser[]>
  {
    return this.httpClient.get<AccountUser[]>(`${this.API_SERVER_URL}`);
  }

  deleteUser(id: number)
  {
    return this.httpClient.delete(`${this.API_SERVER_URL}/${id}`);
  }

  updateUser(id: number, accountUser: AccountUser)
  {
    return this.httpClient.put(`${this.API_SERVER_URL}/update/${id}`, accountUser);
  }

  saveUser(accountUser: AccountUser)
  {
    return this.httpClient.post(`${this.API_SERVER_URL}`, accountUser);
  }


  public addDeviceToUser(deviceId: number, userId: number): Observable<AccountUser> {
    return this.httpClient.get<AccountUser>(`${this.API_SERVER_URL}/add-device/${deviceId}/${userId}`);
  }

  getUserById(id: number): Observable<AccountUser>
  {
    return this.httpClient.get(`${this.API_SERVER_URL}/${id}`);
  }

  getDevices(id: number): Observable<Device[]>
  {
    return this.httpClient.get<Device[]>(`${this.API_SERVER_URL}/devices/${id}`);
  }
}
