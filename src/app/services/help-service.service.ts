import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class HelpServiceService {

  constructor(private afAuth: AngularFireAuth) {
  }

  getHelpData() {
    return JSON.parse(localStorage.getItem('help'));
  }

  public addHelpData(object) {
    let data = JSON.parse(localStorage.getItem('help'));
    this.afAuth.authState.subscribe(user => {
      object.name = user.displayName;
      object.email = user.email;
      if(!object.subAddress) {
        object.subAddress = 'Locality Of Somewhere in';
      }
      data.push(object);
      localStorage.setItem('help', JSON.stringify(data));
      console.log(this.getHelpData());
    });
  }

}
