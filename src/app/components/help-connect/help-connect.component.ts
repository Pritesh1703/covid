import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-help-connect',
  templateUrl: './help-connect.component.html',
  styleUrls: ['./help-connect.component.scss']
})
export class HelpConnectComponent implements OnInit {

  public helpConnectForm:FormGroup;

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.helpConnectForm=this.fb.group({
      action:['',Validators.required],
      helpDescription:['',Validators.required],
      // address:['',Validators.required],
      // mobile:['',Validators.required]
    })
  }

}
