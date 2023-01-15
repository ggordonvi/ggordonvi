import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from 'src/app/pages/projects/project';
import { ProjectService } from 'src/app/pages/projects/project.service';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public project!: Project;
  public baseUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.getProject();
    this.baseUrl = '/' + this.route.parent?.snapshot.routeConfig?.path;
  }

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProject(id).subscribe(project => this.project = project);
  }

}
