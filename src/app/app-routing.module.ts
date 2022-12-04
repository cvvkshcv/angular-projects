import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { Auth1Guard } from './auth1.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivateChild: [Auth1Guard], children: [
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component }
  ] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
