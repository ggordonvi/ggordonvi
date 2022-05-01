import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public projects: Project[] = [];

  constructor() {
    var i = 0;
    this.projects.push(new Project(i++, 'Seating App', 'Testing description'));
    this.projects.push(new Project(i++, 'Jill Sells the Carolinas', 'Testing description'));
    this.projects.push(new Project(i++, 'Graphics', 'Testing description'));
    this.projects.push(new Project(i++, '2022 Portfolio', 'Testing description'));
    this.projects.push(new Project(i++, '2019 Portfolio', 'Testing description'));
    this.projects.push(new Project(i++, '2015 Portfolio', 'Testing description'));
  }

  ngOnInit(): void {
    console.log(this.projects);
  }

}
