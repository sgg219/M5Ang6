import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-consulting',
  templateUrl: './cloud-consulting.component.html',
  styleUrls: ['./cloud-consulting.component.css']
})
export class CloudConsultingComponent implements OnInit {
  philosophies: {type: string, content: string}[] = [
    {type: 'Security', content:
    "Security best practices should not be thrown away when you move to the Cloud. They should be the same as your current"
    + "premise Data Center." },

    {type: 'Adaption', content:
    "Adapting to the cloud means realigning your IT organization to a new way of providing and suporting infrastructure"
    + "services for you customer. The old strategy of scaling up or growing your Data Center continuay to meet short"
    + "term needs gets replaces by the cloud computing model of elasticity."},

    {type: 'Efficiency', content:
    "Agility only comes with taking advantage of the cloud’s automation and scalability capabilities."},
   
    {type: 'TCO', content:
    "Cost savings will come only by adapting to the “Cloud Paradigm”. Customers must must make their cloud services"
    +   "decisions like their traditional data center ones with ”open eyes”."
    },
  ];

  process: {type: string, content: string, photo:string}[] = [
    { type: "Review", content: "the customer's network, security posture and applications", photo:"url(/assets/cloud-consulting/review.jpg)"},
    { type: "Advise", content: "clients on how to determine if an application is an appropriate candidate for a cost effective migration to the cloud", photo:"url(/assets/cloud-consulting/advise.jpg)"},
    { type: "Analyze", content: "the potential cost (TCO) migrating the application to the cloud", photo:"url(/assets/cloud-consulting/analyze.jpg)"},
    { type: "Estimate", content: "the bandwidth requirement for cloud access and recommend the appropriate connectivity solution", photo:"url(/assets/cloud-consulting/estimate.jpg)"},
    { type: "Support", content: "the customer’s transition to the cloud, ensuring a successful migration", photo:"url(/assets/cloud-consulting/support.jpg)"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
