import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: '../create-projects/create-projects.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditProjectComponent implements OnInit {
  public title:string;
  public project: Project;
  public status: string;
  public savedProject;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _uploadService: UploadService
  ) {
    this.title = "Edit project";
   }

   ngOnInit() {

    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProject(id);
      
    });

   }

   getProject(id) {
     this._projectService.getProject(id).subscribe(
       response => {
         this.project = response.project;
       },
       error => {
         console.log(<any>error);
       }
     )
   }

   onSubmit() {
     this._projectService.updateProject(this.project).subscribe(
       response => {
         if(response.project) {
           this.savedProject = response.project;
           this.status = 'success';
         }

       },
       error => {
         console.log(error);
       }
     )
   }

}
