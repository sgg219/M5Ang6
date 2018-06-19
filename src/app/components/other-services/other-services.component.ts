import { Component, OnInit,AfterContentInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material'


@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.css']
})
export class OtherServicesComponent implements AfterContentInit, OnInit{
  expanded = "none";
  

  expand(property : string) {
    if(this.expanded === property){
      this.expanded ="none";
    }else{
      this.expanded = property;
    }
  }
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  }

  constructor(private observableMedia: ObservableMedia) {}
   ngAfterContentInit() {
  
  }

  ngOnInit() {
  }

}
