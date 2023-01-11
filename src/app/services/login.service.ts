import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountUser} from "../models/AccountUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_SERVER_URL='http://localhost:8090/api/users';

  constructor(private httpClient: HttpClient) { }

  getUser(username: string, password: string): Observable<AccountUser>
  {
    return this.httpClient.get<AccountUser>(`${this.API_SERVER_URL}/login/${username}/${password}`);
  }

  isLoggedIn(): boolean
  {
    return localStorage.getItem('currentUser') === null;
  }
}
