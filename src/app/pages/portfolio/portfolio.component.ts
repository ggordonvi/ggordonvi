import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public projects = new Array (
    {
      title: "Test1",
      desc: "Testing Description1"
    },
    {
      title: "Test2",
      desc: "Testing Description2"
    },
    {
      title: "Test3",
      desc: "Testing Description3"
    },
    {
      title: "Test4",
      desc: "Testing Description4"
    }
  );

  constructor() { }

  ngOnInit(): void {
    console.log(this.projects);
  }

}
