import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SubhomeComponent } from './subhome/subhome.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'sub',
        component: SubhomeComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: AboutComponent
  }
];

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
// export const allRoutes = [HomeComponent, AboutComponent, NotFoundComponent];