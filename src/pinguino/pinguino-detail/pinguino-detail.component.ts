import { Component, Input, OnInit } from '@angular/core';
import { PinguinoDetail } from '../pinguinoDetail';

@Component({
  selector: 'app-pinguino-detail',
  templateUrl: './pinguino-detail.component.html',
  styleUrls: ['./pinguino-detail.component.css']
})
export class PinguinoDetailComponent implements OnInit {

  @Input() pinguinoDetail!:PinguinoDetail
  constructor() { }

  ngOnInit() {
  }

}
