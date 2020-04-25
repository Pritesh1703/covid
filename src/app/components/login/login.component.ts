import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm:FormGroup;
  public isSelected = false;

  constructor(private loginService: LoginService, private fb: FormBuilder) {
    this.loginForm=this.fb.group({
      role: String
    });
  }

  login() {
    this.loginService.login();
  }

  toggleLogin(key) {
    if(key === 'individual' || key === 'NGO') {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
  }

}
