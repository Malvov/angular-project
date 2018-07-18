import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css'],
  providers: [ProjectService]
})
export class CreateProjectsComponent implements OnInit {
  public title:string;
  public project: Project;
  constructor(
    private _projectService: ProjectService
  ) {
    this.title = "Create project";
    this.project = new Project('','','',new Date().getFullYear(),'','');

   }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.project);
  }

}
