import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
    first: string;
    last: string;
    email: string;
    website: string;
    message: string;
    phone:string;

    processForm(submissionForm) {
      if(!submissionForm.valid || submissionForm.pristine){
        alert("Please insert valid info")
      }else{
      const allInfo = `My name is ${this.first} ${this.last}. My email is ${this.email} and my website is ${this.website}. My message is ${this.message}`;
      alert(allInfo); 
      }
    }

  constructor() { }

  ngOnInit() {
    
  }

}
