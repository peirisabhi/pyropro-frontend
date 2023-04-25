import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '../../../environments/environment';
import {UserRoleService} from "../../service/user-role-service/user-role.service";
import {UserRole} from "../../model/user-role-model/user-role";
import {User} from "../../model/user-model/user";
import {UserService} from "../../service/user-service/user.service";
import {NotificationService} from "../../service/notification-service/notification.service";
import {HttpClient} from "@angular/common/http";
import {DataTablesResponse} from "../../model/data-tables-response-model/data-tables-response";
import {Confirm} from "notiflix";


let apiURL = environment.apiURL;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userRoles: UserRole[] = [];
  user: User = new User();
  dtOptions: DataTables.Settings = {};
  users?: any[];


  constructor(private modalService: NgbModal,
              private userRoleService: UserRoleService,
              private userService: UserService,
              private notifyService: NotificationService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log(environment.title)
    this.getUserRoles();

    this.dtOptions = {
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            apiURL + 'user/get',
            dataTablesParameters, {}
          ).subscribe(resp => {
          console.log("data table called")
          this.users = resp.data;

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

  getUserRoles() {
    this.userRoleService.getUserRoles().subscribe(data => {
      this.userRoles = data;
      console.log(data);
    })
  }

  saveUser() {
    console.log("okk")


    this.userService.saveUser(this.user)
      .subscribe(data => {
        console.log("saving --- " + data);
        this.user = new User();
        this.notifyService.showSuccess("Successfully User Saved", "Success");
        window.location.reload();
      })
  }

  removeUser(id: any){
    console.log(id)

    Confirm.show(
      'Confirm',
      'Do you want to book?',
      'Yes', 'No',
      () => {
        this.userService.removeUser(id)
          .subscribe(data => {
            console.log("removing --- " + data);
            this.notifyService.showSuccess("Successfully User Removed", "Success");
            window.location.reload();
          })
      }
    );
  }

}
