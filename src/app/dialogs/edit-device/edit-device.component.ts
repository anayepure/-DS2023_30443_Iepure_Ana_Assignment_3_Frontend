import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountusersService} from "../../services/accountusers.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EditUserComponent} from "../edit-user/edit-user.component";
import {DevicesService} from "../../services/devices.service";
import {AccountUser} from "../../models/AccountUser";
import {Device} from "../../models/Device";

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

  public editForm: FormGroup;

  constructor(public deviceService: DevicesService,
              public dialogRef: MatDialogRef<EditUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.editForm = new FormGroup(
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

  updateDevice()
  {
    const device: Device=
      {
        id:this.data,
        description: this.editForm.get('description')?.value,
        location: this.editForm.get('location')?.value,
        maximumconsumption: this.editForm.get('maximumconsumption')?.value,
        measurements: []
      }
    this.deviceService.updateDevice(this.data, device).subscribe(()=>this.dialogRef.close(true),
      ()=>this.dialogRef.close(false),
    )
  }



}
