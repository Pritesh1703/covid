import { Component, OnInit } from '@angular/core';
import { HelpServiceService } from 'src/app/services/help-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-my-help',
  templateUrl: './my-help.component.html',
  styleUrls: ['./my-help.component.scss']
})
export class MyHelpComponent implements OnInit {
  helpList = [];
  closeResult = '';
  helpObj = {
    action: 'extend',
    helpDescription: 'need ',
    address: 'Hyderabad',
    mobileNumber: '999999999',
    email: 'gaurav.mali125@gmail.com',
    name: 'Gaurav Singh',
  };
  user = {email: ''}
  JSON = JSON;

  constructor(private modalService: NgbModal,
    private helpSvc: HelpServiceService, private afAuth: AngularFireAuth) {
      this.helpList = this.helpSvc.getHelpData();
      this.afAuth.authState.subscribe(user => {
        this.user.email = user.email;
      });
     }

  ngOnInit(): void {
  }

  open(content2, data) {
    this.helpObj = data;
    this.modalService
      .open(content2, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any) {
    console.log(reason);
  }

}
