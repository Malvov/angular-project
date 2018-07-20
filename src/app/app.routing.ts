import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'create-project', component: CreateProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'project/:id', component: DetailComponent},
    {path: '**', component: ErrorComponent}    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);