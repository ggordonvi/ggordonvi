import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/pages/portfolio/project.service';
import { Project } from 'src/app/pages/portfolio/project';

@Component({
  selector: 'app-portfolio-detail',
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
    const id = Number(this.route.snapshot.paramMap.get('id')!);
    this.project = this.projectService.getProject(id);
    this.baseUrl = '/' + this.route.parent?.snapshot.routeConfig?.path;
  }

}
