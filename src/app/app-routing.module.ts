import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {UserComponent} from "./component/user/user.component";
import {DeviceComponent} from "./component/device/device.component";
import {FireDetectionAlertsComponent} from "./component/fire-detection-alerts/fire-detection-alerts.component";
import {FirePredictionWarningComponent} from "./component/fire-prediction-warning/fire-prediction-warning.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'user', component:UserComponent},
  {path: 'device', component:DeviceComponent},
  {path: 'fire-detections', component:FireDetectionAlertsComponent},
  {path: 'fire-predictions', component:FirePredictionWarningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
