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
  filteredHelpList = [];
  uniqueLocations = [];
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
    this.helpList = this.filteredHelpList = this.helpSvc.getHelpData();
    this.uniqueLocations = this.getAllLocations();
  }

  refresh(): void {
    this.helpList = this.filteredHelpList = this.helpSvc.getHelpData();
    this.uniqueLocations = this.getAllLocations();
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

  filterBylocation(key) {
    this.filteredHelpList = this.helpList.filter(help => { return help.address === key });
  }

  getAllLocations() {
    const uniqueList = this.helpList.map(item => item.address).filter((value, index, self) => self.indexOf(value) === index)
    return uniqueList;
  }

  private getDismissReason(reason: any) {
    console.log(reason);
  }
}
