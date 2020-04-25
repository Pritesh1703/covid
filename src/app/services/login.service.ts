import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: firebase.User;

  constructor(private afAuth: AngularFireAuth, private route: Router) { 
    afAuth.authState.subscribe(user => this.user = user);
  }

  public getUser() {
    return this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).finally(() => {
      this.route.navigate(['dashboard']);
    });
  }

  logout() {
    this.afAuth.auth.signOut().finally(() => {
      this.route.navigate(['login']);
    });
  }
}
