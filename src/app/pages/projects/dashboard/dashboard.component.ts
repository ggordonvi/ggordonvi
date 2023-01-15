import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/pages/projects/project';
import { ProjectService } from 'src/app/pages/projects/project.service';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public projects: Project[] = [];

  constructor(private projectSevice: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectSevice.getProjects().subscribe(projects => this.projects = projects);
  }

}
