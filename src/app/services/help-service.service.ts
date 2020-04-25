import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpServiceService {

  constructor() {
  }

  getHelpData() {
    return JSON.parse(localStorage.getItem('help'));
  }

  public addHelpData(object) {
    let data = JSON.parse(localStorage.getItem('help'));
    data.push(object);
    localStorage.setItem('help', JSON.stringify(data));
  }

}
