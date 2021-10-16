import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { LearningServiceComponent } from './learning-service/learning-service.component';

const routes: Routes = [
  { path: 'home' , component : HomeComponent},
  { path: 'about' , component : AboutComponent},
  { path: 'todo' , component : TodoComponent},
  { path: 'learning-service' , component : LearningServiceComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
