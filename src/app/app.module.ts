import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { AdminPageUsersComponent } from './admin-page-users/admin-page-users.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { EditUserComponent } from './dialogs/edit-user/edit-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AddUserComponent } from './dialogs/add-user/add-user.component';
import { AdminPageDevicesComponent } from './admin-page-devices/admin-page-devices.component';
import {MatTabsModule} from "@angular/material/tabs";
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddDeviceComponent } from './dialogs/add-device/add-device.component';
import { EditDeviceComponent } from './dialogs/edit-device/edit-device.component';
import { LinkDeviceComponent } from './dialogs/link-device/link-device.component';
import { UserPageMeasurementsComponent } from './user-page-measurements/user-page-measurements.component';
import {BarChartModule} from "@swimlane/ngx-charts";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { UserPageDevicesComponent } from './user-page-devices/user-page-devices.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ChatComponent } from './chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageUsersComponent,
    EditUserComponent,
    AddUserComponent,
    AdminPageDevicesComponent,
    AdminPageComponent,
    AddDeviceComponent,
    EditDeviceComponent,
    LinkDeviceComponent,
    UserPageMeasurementsComponent,
    UserPageDevicesComponent,
    UserPageComponent,
    ChatComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        HttpClientModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        MatTabsModule,
        BarChartModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
