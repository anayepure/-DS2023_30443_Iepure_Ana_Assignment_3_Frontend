import { Component, OnInit } from '@angular/core';
import {AccountusersService} from "../services/accountusers.service";
import {MatTableDataSource} from "@angular/material/table";
import {AccountUser} from "../models/AccountUser";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditUserComponent} from "../dialogs/edit-user/edit-user.component";
import {AddUserComponent} from "../dialogs/add-user/add-user.component";
import {LinkDeviceComponent} from "../dialogs/link-device/link-device.component";


@Component({
  selector: 'app-admin-page-users',
  templateUrl: './admin-page-users.component.html',
  styleUrls: ['./admin-page-users.component.css']
})
export class AdminPageUsersComponent implements OnInit {
  displayedColumns: string[] = ['username', 'password', 'role', 'actions'];
  public dataSource: MatTableDataSource<AccountUser>;
  public users: AccountUser[];
  constructor(private usersService:AccountusersService,
              public dialog: MatDialog
              ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers()
  {
    this.usersService.getAllUsers().subscribe((results)=>
    {
      this.dataSource=new MatTableDataSource(results);
    })
  }

  deleteUser(id: number)
  {
    this.usersService.deleteUser(id).subscribe(()=>this.loadUsers());
  }

  openEditDialog(row: number): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadUsers();
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadUsers();
    });
  }

  openLinkDialog(row: any): void {
    const dialogRef = this.dialog.open(LinkDeviceComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadUsers();
    });
  }

}
