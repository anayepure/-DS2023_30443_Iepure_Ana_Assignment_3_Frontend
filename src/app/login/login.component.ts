import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountUser} from "../models/AccountUser";
import {LoginService} from "../services/login.service";
import {MatTableDataSource} from "@angular/material/table";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public accoutUser: AccountUser;

  constructor(private loginService: LoginService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username: new FormControl(),
        password: new FormControl()
      }
    )
  }

  loginUser()
  {
    this.loginService.getUser(this.loginForm.get('username')?.value,this.loginForm.get('password')?.value).subscribe((result)=>
    {
      localStorage.setItem('currentUser', JSON.stringify(result));
    });

    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user != null && user.role==='ADMIN') this.router.navigate(['/admin']);
    else if (user != null && user.role==='USER') this.router.navigate(['/user']);
  }
}
