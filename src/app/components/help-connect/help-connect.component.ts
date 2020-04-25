import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelpServiceService } from 'src/app/services/help-service.service';

@Component({
  selector: 'app-help-connect',
  templateUrl: './help-connect.component.html',
  styleUrls: ['./help-connect.component.scss']
})
export class HelpConnectComponent implements OnInit {

  public helpConnectForm:FormGroup;
  public successMsg:boolean;
  public errorMsg:boolean;

  constructor(
    private fb:FormBuilder,
    private helpSvc:HelpServiceService
  ) { }

  ngOnInit(): void {
    this.helpConnectForm=this.fb.group({
      action:['',Validators.required],
      helpDescription:['',Validators.required],
      address:['',Validators.required],
      mobileNumber:['',Validators.required]
    })
  }

  public onSubmit(){
    this.helpSvc.addHelpData(this.helpConnectForm.value);
    this.successMsg=true;
    this.helpConnectForm.reset();
    console.log(this.helpConnectForm.value);
    console.log(this.helpSvc.getHelpData());
  }

}
