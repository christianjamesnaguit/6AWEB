import { Component } from '@angular/core';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-new-cmp',
  standalone: true,
  imports: [],
  templateUrl: './new-cmp.html',
  styleUrl: './new-cmp.css',
})
export class NewCmp {
  todaydate;
  newcomponent = "entered in new component!";
  componentproperty;
  constructor(private myService: Myservice) {
    this.todaydate = this.myService.showTodayDate();
    this.myService.serviceproperty = "modified service property from new component";
    this.componentproperty = this.myService.serviceproperty;
  }
}
