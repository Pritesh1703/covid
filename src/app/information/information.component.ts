import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as jsonURL from "../siteData/symptoms.json"

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public symptomData=[];
  public _jsonURL=jsonURL;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getJSON().subscribe((response)=>{
      this.symptomData=response.default.data;
      console.log("*****",this.symptomData);
    })
  }
  public getJSON(): Observable<any> {
    return of(this._jsonURL);
  }

}
