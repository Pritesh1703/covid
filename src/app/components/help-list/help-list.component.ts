import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelpServiceService } from 'src/app/services/help-service.service';

@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.scss']
})
export class HelpListComponent implements OnInit {

  closeResult = '';

  helpList = [];

  constructor(private modalService: NgbModal, private helpSvc: HelpServiceService) { }

  ngOnInit(): void {
    this.helpList = this.helpSvc.getHelpData();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openModal() {
    
  }

  private getDismissReason(reason: any) {
    console.log(reason);
  }

}
