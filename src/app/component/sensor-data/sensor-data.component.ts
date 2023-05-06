import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {DataTablesResponse} from "../../model/data-tables-response-model/data-tables-response";
import {HttpClient} from "@angular/common/http";

let SenorDataSaveServiceURL = environment.SenorDataSaveServiceURL;

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {


  dtOptions: DataTables.Settings = {}
  sensorDataList?: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(environment.title)

    this.dtOptions = {
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            SenorDataSaveServiceURL + 'data/',
            dataTablesParameters, {}
          ).subscribe(resp => {
          console.log("data table called")
          this.sensorDataList = resp.data;

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

}
