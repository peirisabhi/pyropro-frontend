import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fire-prediction-warning',
  templateUrl: './fire-prediction-warning.component.html',
  styleUrls: ['./fire-prediction-warning.component.css']
})
export class FirePredictionWarningComponent implements OnInit {

  dtOptions: DataTables.Settings = {}
  fires?: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
