import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountusersService} from "../../services/accountusers.service";
import {AccountUser} from "../../models/AccountUser";

@Component({
  selector: 'app-add-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public editForm: FormGroup;

  constructor(
    public userService: AccountusersService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.editForm = new FormGroup(
      {
        username: new FormControl(),
        password: new FormControl()
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateUser()
  {
    const accountUser: AccountUser=
      {
        id:this.data,
        username: this.editForm.get('username')?.value,
        password: this.editForm.get('password')?.value,
      }
    this.userService.updateUser(this.data, accountUser).subscribe(()=>this.dialogRef.close(true),
      ()=>this.dialogRef.close(false),
      )
  }



}
