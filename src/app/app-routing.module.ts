import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projectsComponent/projects.component';

const routes: Routes = [
  {
    path: "", component: MainComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "projects", component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
