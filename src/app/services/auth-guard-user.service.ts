import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUserService implements CanActivate{

  constructor() { }

  canActivate(): boolean{
    const user=localStorage.getItem('currentUser');
    return !!(user && JSON.parse(user).role === 'USER');

  }
}
