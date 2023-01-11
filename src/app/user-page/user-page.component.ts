import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AccountUser} from "../models/AccountUser";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public user:AccountUser;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  logOut()
  {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }


}
