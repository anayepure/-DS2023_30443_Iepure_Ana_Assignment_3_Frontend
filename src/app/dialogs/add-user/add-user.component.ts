import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountusersService} from "../../services/accountusers.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AccountUser} from "../../models/AccountUser";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public addForm: FormGroup;
  constructor( public userService: AccountusersService,
               public dialogRef: MatDialogRef<AddUserComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.addForm = new FormGroup(
      {
        username: new FormControl(),
        password: new FormControl(),
        role: new FormControl()
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser()
  {
    const accountUser: AccountUser=
      {
        id:this.data,
        username: this.addForm.get('username')?.value,
        password: this.addForm.get('password')?.value,
        role: this.addForm.get('role')?.value,
      }
    this.userService.saveUser(accountUser).subscribe(()=>this.dialogRef.close(true),
      ()=>this.dialogRef.close(false),
    )
  }



}
