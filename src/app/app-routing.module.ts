import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ApiCallComponent } from './pages/api-call/api-call.component';

const routes: Routes = [
  { path: 'home' , component : HomeComponent },
  { path: 'api-call' , component : ApiCallComponent },
  { path: '**' , redirectTo: 'home' }
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
