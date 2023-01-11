import { Component, OnInit } from '@angular/core';
import {AccountusersService} from "../services/accountusers.service";
import {MatTableDataSource} from "@angular/material/table";
import {AccountUser} from "../models/AccountUser";
import {Measurement} from "../models/Measurement";
import {DevicesService} from "../services/devices.service";
import {Device} from "../models/Device";
import {Serie} from "../models/Serie";
import {FormControl, FormGroup} from "@angular/forms";
import {MeasurementsService} from "../services/measurements.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-user-page-measurements',
  templateUrl: './user-page-measurements.component.html',
  styleUrls: ['./user-page-measurements.component.css'],
  providers: [DatePipe]
})
export class UserPageMeasurementsComponent implements OnInit {

  public accountUser: AccountUser;
  public device: Device;
  public devices: Device[];
  public measurements: Measurement[];
  public series: Serie[];
  public series2: Serie[];
  public formFilter: FormGroup;
  public dateAsString: string | null;

  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Hour';
  showYAxisLabel = true;
  yAxisLabel = 'Amount';


  constructor(private usersService:AccountusersService,
              private deviceService: DevicesService,
              private measurementService: MeasurementsService,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.loadUserData();
    this.formFilter=new FormGroup(
      {
        devices:new FormControl(this.devices),
        time:new FormControl()
      }
    )

    this.formFilter.get('devices')?.valueChanges.subscribe(value=>{
      this.loadMeasurementData(value);
    })

    this.filterMeasurementsByDate();
  }

  loadUserData()
  {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.usersService.getUserById(user.id).subscribe((result)=>
    {
      this.accountUser=result;
      this.usersService.getDevices(user.id).subscribe((result)=>
      {
        this.devices=result;
      })
    })
  }

  loadMeasurementData(deviceId: number): Measurement[]
  {
    this.deviceService.getDeviceById(deviceId).subscribe((result)=>
    {
      this.device=result;
      this.deviceService.getMeasurements(this.device.id as number).subscribe((measurements)=>
      {
        this.measurements=measurements;
        this.series = measurements.map(measurement => ({ name: new Date(measurement.measurementDate as string).getHours().toString(), value: measurement.amount }));
      })
    })
    return this.measurements;
  }

  filterMeasurementsByDate()
  {
    this.formFilter.get('time')?.valueChanges.subscribe(value=>{
      const date=new Date(value);
      const filteredMeasurement = this.measurements.filter(measurement => new Date(measurement.measurementDate as string).getFullYear()===date.getFullYear() &&
        new Date(measurement.measurementDate as string).getMonth()===date.getMonth()&&
        new Date(measurement.measurementDate as string).getDate()===date.getDate());
      this.series=filteredMeasurement.map(measurement => ({ name: new Date(measurement.measurementDate as string).getHours().toString(), value: measurement.amount }));
    })
  }


}
