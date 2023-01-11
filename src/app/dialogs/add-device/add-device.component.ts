import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountusersService} from "../../services/accountusers.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DevicesService} from "../../services/devices.service";
import {AccountUser} from "../../models/AccountUser";
import {Device} from "../../models/Device";

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  public addForm: FormGroup;
  constructor(public deviceService: DevicesService,
              public dialogRef: MatDialogRef<AddDeviceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.addForm = new FormGroup(
      {
        description: new FormControl(),
        location: new FormControl(),
        maximumconsumption: new FormControl()
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveDevice()
  {
    const device: Device=
      {
        id:this.data,
        description: this.addForm.get('description')?.value,
        location: this.addForm.get('location')?.value,
        maximumconsumption: this.addForm.get('maximumconsumption')?.value,
        measurements: []
      }
    this.deviceService.saveDevice(device).subscribe(()=>this.dialogRef.close(true),
      ()=>this.dialogRef.close(false),
    )
  }

}
