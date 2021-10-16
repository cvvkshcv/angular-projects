import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { FlypanelComponent } from './flypanel/flypanel.component';
import { FlypanelHeadingComponent } from './flypanel/flypanel-heading/flypanel-heading.component';
import { FlypanelContentComponent } from './flypanel/flypanel-content/flypanel-content.component';
import { FlypanelFooterComponent } from './flypanel/flypanel-footer/flypanel-footer.component';
import { CompAComponent } from './home/comp-a/comp-a.component';
import { CompBComponent } from './home/comp-b/comp-b.component';
import { LearningServiceComponent } from './learning-service/learning-service.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MySecondComponentComponent,
    TodoTaskComponent,
    CustomCardComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    TodoComponent,
    TodoTaskComponent,
    FlypanelComponent,
    FlypanelHeadingComponent,
    FlypanelContentComponent,
    FlypanelFooterComponent,
    CompAComponent,
    CompBComponent,
    LearningServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
