import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/model/device-model/device';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../../service/notification-service/notification.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user-model/user";

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
              private http: HttpClient) { }

  ngOnInit(): void {
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


    // this.userService.saveUser(this.user)
    //   .subscribe(data => {
    //     console.log("saving --- " + data);
    //     this.user = new User();
    //     this.notifyService.showSuccess("Successfully User Saved", "Success");
    //     window.location.reload();
    //   })
  }


}
