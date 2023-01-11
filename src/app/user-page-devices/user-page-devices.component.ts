import { Component, OnInit } from '@angular/core';
import {AccountusersService} from "../services/accountusers.service";
import {AccountUser} from "../models/AccountUser";
import {MatTableDataSource} from "@angular/material/table";
import {Device} from "../models/Device";

@Component({
  selector: 'app-user-page-devices',
  templateUrl: './user-page-devices.component.html',
  styleUrls: ['./user-page-devices.component.css']
})
export class UserPageDevicesComponent implements OnInit {

  public accountUser: AccountUser;
  displayedColumns: string[] = ['location', 'description', 'maximumconsumption'];
  public dataSource: MatTableDataSource<Device>;

  constructor(private usersService: AccountusersService,

              ) { }

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices()
  {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.usersService.getUserById(user.id).subscribe((result)=>
    {
      this.accountUser=result;
      this.usersService.getDevices(user.id).subscribe((results)=>
      {
        this.dataSource=new MatTableDataSource(results);;
      })
    })
  }
}
