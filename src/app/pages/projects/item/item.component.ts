import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from 'src/app/pages/projects/project';
import { ProjectService } from 'src/app/pages/projects/project.service';

@Component({
  selector: 'app-projects-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() projectId!: number;
  public project!: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
    ) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    this.projectService.getProject(this.projectId).subscribe(project => this.project = project);
  }

  navigateToProject(id: number) {
    this.router.navigate(['project', id], {relativeTo:this.route});
  }

}
