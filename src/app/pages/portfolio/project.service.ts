import { Injectable } from '@angular/core';
import { Project } from 'src/app/pages/portfolio/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

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

  getProject(id: number): Project {
    return this.projects[id];
  }

  getAllProjects(): Project[] {
    return this.projects;
  }
}
