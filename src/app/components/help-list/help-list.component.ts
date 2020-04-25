import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelpServiceService } from 'src/app/services/help-service.service';

@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.scss'],
})
export class HelpListComponent implements OnInit {
  closeResult = '';

  helpList = [];
  helpObj = {
    action: 'extend',
    helpDescription: 'need ',
    address: 'Hyderabad',
    mobileNumber: '999999999',
    email: 'gaurav.mali125@gmail.com',
    name: 'Gaurav Singh',
  };

  constructor(
    private modalService: NgbModal,
    private helpSvc: HelpServiceService
  ) {}

  ngOnInit(): void {
    this.helpList = this.helpSvc.getHelpData();
  }

  open(content, data) {
    this.helpObj = data;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
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
