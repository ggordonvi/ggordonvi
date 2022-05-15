import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from 'src/app/pages/portfolio/project';
import { PROJECTS } from 'src/app/pages/portfolio/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }

  getProject(id: number): Observable<Project> {
    const project = PROJECTS.find(project => project.id === id)!;
    return of(project);
  }
}
