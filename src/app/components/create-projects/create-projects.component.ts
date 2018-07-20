import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateProjectsComponent implements OnInit {
  public title:string;
  public project: Project;
  public status: string;
  public savedProject;
  public filesToUpload: Array<File>;
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Create project";
    this.project = new Project('','','',new Date().getFullYear(),'','', '');

   }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project) {
          this.status = 'success';
          this.savedProject = response.project;
          //Subir la imagen
          this._uploadService.makeFileRequest(global.url+'upload-image/'+response.project._id,
        [], this.filesToUpload, 'image').then(
          (result:any) => {
          
            
            console.log(result);
            form.reset();
          })
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }

    );
  }

  fileChangeEvent(fileInput:any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

}
