import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
