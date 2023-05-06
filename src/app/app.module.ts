import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TopbarComponent } from './component/common/topbar/topbar.component';
import { SideNavbarComponent } from './component/common/side-navbar/side-navbar.component';
import { UserComponent } from './component/user/user.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import {DataTablesModule} from "angular-datatables";
import { DeviceComponent } from './component/device/device.component';
import { FirePredictionWarningComponent } from './component/fire-prediction-warning/fire-prediction-warning.component';
import { FireDetectionAlertsComponent } from './component/fire-detection-alerts/fire-detection-alerts.component';
import { SensorDataComponent } from './component/sensor-data/sensor-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopbarComponent,
    SideNavbarComponent,
    UserComponent,
    DeviceComponent,
    FirePredictionWarningComponent,
    FireDetectionAlertsComponent,
    SensorDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
