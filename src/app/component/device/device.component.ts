import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/model/device-model/device';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../../service/notification-service/notification.service";
import {HttpClient} from "@angular/common/http";
import {DeviceServiceService} from "../../service/device-service/device-service.service";
import {DataTablesResponse} from "../../model/data-tables-response-model/data-tables-response";
import {environment} from "../../../environments/environment";

let apiURL = environment.authServiceURL;

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  device : Device = new Device()
  dtOptions: DataTables.Settings = {}
  devices?: any[];

  constructor(private modalService: NgbModal,
              private notifyService: NotificationService,
              private http: HttpClient,
              private deviceService: DeviceServiceService) { }

  ngOnInit(): void {
    console.log(environment.title)
    this.dtOptions = {
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            apiURL + 'device/get',
            dataTablesParameters, {}
          ).subscribe(resp => {
          console.log("data table called")
          this.devices = resp.data;

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


  open(content: any) {
    console.log(content)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  close(content: any) {
    this.modalService.dismissAll();
  }


  saveDevice() {
    console.log("okk")


    this.deviceService.saveDevice(this.device)
      .subscribe(data => {
        console.log("saving --- " + data);
        this.device = new Device();
        this.notifyService.showSuccess("Successfully Device Saved", "Success");
        window.location.reload();
      })
  }


}
