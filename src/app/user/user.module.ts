import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingRoutingModule } from './user-routing.module';
import { NewUserComponent } from './new-user/new-user.component';



@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingRoutingModule
  ]
})
export class UserModule { }
