import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() project: Project = new Project(0, '', '');

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.project)
  }

}
