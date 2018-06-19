import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  model: any = {};

  constructor() { }
  onSubmit(){
    alert('Success!! ' + JSON.stringify(this.model));
  }
  ngOnInit() {
  }

}
