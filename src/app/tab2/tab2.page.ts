import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  m: any[];
  t: any[];

  constructor() {
    this.m = [];
    for (var i = 1; i < 996; i++) {
      this.m.push(i);
    }

    this.t = [];
    let size;
    let count = 0;
    for (var j = 0; j < this.m.length; j = j + size) {
      size = count % 2 === 0 ? 7 : 6;
      count++;
      this.t.push(this.m.splice(j, size));
    }

    console.log(this.t);
  }

}
