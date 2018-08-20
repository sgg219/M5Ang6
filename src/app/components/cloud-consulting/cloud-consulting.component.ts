import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cloud-consulting',
  templateUrl: './cloud-consulting.component.html',
  styleUrls: ['./cloud-consulting.component.css']
})
export class CloudConsultingComponent implements OnInit {

  process: {step: string, content: string, number:string, color:string, numberSide:string, contentSide:string}[] = [
    {step: 'Review', content:
    "Review - the customer's business environment, applications, network, security, and overall cost structures."
    ,number:"01", color:"rgba(45, 178, 211, 0.3)",numberSide:"1" ,contentSide:"2" },

    {step: 'Design', content:
    "Design - architect a customer's end-state cloud environment supporting their applications/business needs backed by a sound network and security architecture"
    ,number:"02", color:"rgba(45, 178, 211, 0.4)",numberSide:"2" ,contentSide:"1" },

    {step: 'Plan', content:
    "Plan -  develop a realistic migration plan that the customer is comfortable with to achieve success."
    ,number:"03", color:"rgba(45, 178, 211, 0.5)",numberSide:"1" ,contentSide:"2" },
   
    {step: 'Implement', content:
    "Implement-  build the customer's new cloud infrastructure ensuring a successful migration"
    ,number:"04", color:"rgba(45, 178, 211, 0.6)",numberSide:"2" ,contentSide:"1"},
    
    {step: 'Support', content:
    "Support - the customer’s transition to the cloud, ensuring a successful migration"
    ,number:"05", color:"rgba(45, 178, 211, 0.7)",numberSide:"1" ,contentSide:"2" },
  ];
  process22: {step: string, content: string}[] = [
    {step: 'Security', content:
    "Security best practices should not be thrown away when you move to the Cloud. They should be the same as your current"
    + "premise Data Center." },

    {step: 'Adaption', content:
    "Adapting to the cloud means realigning your IT organization to a new way of providing and suporting infrastructure"
    + "services for you customer. The old strategy of scaling up or growing your Data Center continuay to meet short"
    + "term needs gets replaces by the cloud computing model of elasticity."},

    {step: 'Efficiency', content:
    "Agility only comes with taking advantage of the cloud’s automation and scalability capabilities."},
   
    {step: 'TCO', content:
    "Cost savings will come only by adapting to the “Cloud Paradigm”. Customers must must make their cloud services"
    +   "decisions like their traditional data center ones with ”open eyes”."
    },
  ];

  process21: {type: string, content: string, photo:string}[] = [
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
