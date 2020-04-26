import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelpServiceService {

  constructor(private afAuth: AngularFireAuth, public router: Router) {
  }

  getHelpData() {
    return JSON.parse(localStorage.getItem('help'));
  }

  public addHelpData(object) {
    let data = JSON.parse(localStorage.getItem('help'));
    this.afAuth.authState.subscribe(user => {
      object.name = user.displayName;
      object.email = user.email;
      object.address =object.city;
      if(!object.subAddress) {
        object.subAddress = 'Locality Of Somewhere in ' +  object.street + ',' +object.locality;
      }
      data.push(object);
      localStorage.setItem('help', JSON.stringify(data));
      console.log(this.getHelpData());
      console.log('redirecting');
      this.router.navigate(['dashboard']);
    });
  }

}
