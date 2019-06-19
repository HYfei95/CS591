import {Component, Input, OnInit} from '@angular/core';
import { model } from '../model/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() selectedCurrency: model;

  constructor() {
  }

  ngOnInit() {
  }

}
