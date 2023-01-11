import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AccountUser} from "../models/AccountUser";
import {Device} from "../models/Device";
import {AccountusersService} from "../services/accountusers.service";
import {MatDialog} from "@angular/material/dialog";
import {DevicesService} from "../services/devices.service";
import {EditUserComponent} from "../dialogs/edit-user/edit-user.component";
import {EditDeviceComponent} from "../dialogs/edit-device/edit-device.component";
import {AddUserComponent} from "../dialogs/add-user/add-user.component";
import {AddDeviceComponent} from "../dialogs/add-device/add-device.component";

@Component({
  selector: 'app-admin-page-devices',
  templateUrl: './admin-page-devices.component.html',
  styleUrls: ['./admin-page-devices.component.css']
})
export class AdminPageDevicesComponent implements OnInit {
  displayedColumns: string[] = ['id','location', 'description', 'maximumconsumption','actions'];
  public dataSource: MatTableDataSource<Device>;
  public devices: Device[];
  constructor(
    private devicesService:DevicesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices()
  {
    this.devicesService.getAllDevices().subscribe((results)=>
    {
      this.dataSource=new MatTableDataSource(results);
      this.devices=results;
    })
  }

  deleteDevice(id: number)
  {
    this.devicesService.deleteDevice(id).subscribe(()=>this.loadDevices());
  }

  openEditDialog(row: number): void {
    const dialogRef = this.dialog.open(EditDeviceComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadDevices();
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDeviceComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadDevices();
    });
  }

}
