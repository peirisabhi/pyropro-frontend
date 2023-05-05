import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fire-detection-alerts',
  templateUrl: './fire-detection-alerts.component.html',
  styleUrls: ['./fire-detection-alerts.component.css']
})
export class FireDetectionAlertsComponent implements OnInit {

  dtOptions: DataTables.Settings = {}
  fires?: any[];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
