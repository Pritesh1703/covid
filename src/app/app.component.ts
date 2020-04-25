import { Component } from '@angular/core';
import * as data from './siteData/help.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covidHelp';

  constructor() {
    if(!JSON.parse(localStorage.getItem('help'))) {
      console.log('hee');
      localStorage.setItem('help', JSON.stringify(data.data));
    }
  }
}
