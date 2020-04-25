import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: firebase.User;

  constructor(private loginService: LoginService) { 
    this.loginService.getUser().subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }

}
