import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountusersService} from "../../services/accountusers.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-link-device',
  templateUrl: './link-device.component.html',
  styleUrls: ['./link-device.component.css']
})
export class LinkDeviceComponent implements OnInit {

  public editForm: FormGroup;
  constructor(
    public userService: AccountusersService,
    public dialogRef: MatDialogRef<LinkDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.editForm = new FormGroup(
      {
        deviceid: new FormControl(),
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  linkDevice()
  {
    const deviceid=this.editForm.get('deviceid')?.value;
    this.userService.addDeviceToUser(deviceid as number, this.data).subscribe(()=>this.dialogRef.close(true),
      ()=>this.dialogRef.close(false),
    )
  }
}
