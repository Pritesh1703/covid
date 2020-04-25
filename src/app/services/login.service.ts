import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: firebase.User;

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => this.user = user)
  }

  public getUser() {
    return this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).finally(() => {
      
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
