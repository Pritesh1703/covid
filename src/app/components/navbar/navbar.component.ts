import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
