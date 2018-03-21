import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app_counter = 0;
  items = [];

  doOnCounterChanged(data) {
    this.app_counter = data;
    this.items.push(data);
  }
}
