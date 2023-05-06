import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataTablesResponse} from "../../model/data-tables-response-model/data-tables-response";
import {environment} from "../../../environments/environment";

let notificationServiceURL = environment.notificationServiceURL;

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

    this.dtOptions = {
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            notificationServiceURL + 'data/detections',
            dataTablesParameters, {}
          ).subscribe(resp => {
          console.log("data table called")
          this.fires = resp.data;

          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      columns: [
        {data: 'id'},
        {data: 'fname'},
        {data: 'lname'},
        {data: 'email'},
        {data: 'gender'},
        {data: 'nic'}

      ]
    };

  }


  getDate(timestamp: any) {
    console.log("date")
    var date= new Date(timestamp);
    var dateFormat = date.getDate()+
      "/"+(date.getMonth()+1)+
      "/"+date.getFullYear()+
      " "+date.getHours()+
      ":"+date.getMinutes()+
      ":"+date.getSeconds();
    // this.userService.saveUser(this.user)
    //   .subscribe(data => {
    //     console.log("saving --- " + data);
    //     this.user = new User();
    //     this.notifyService.showSuccess("Successfully User Saved", "Success");
    //     window.location.reload();
    //   })
    console.log(dateFormat)
    return dateFormat;
  }

}
