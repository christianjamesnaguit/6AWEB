import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  showTodayDate() {
    let ndate = new Date();
    return ndate
  }
  serviceproperty = "this is service property";
}
