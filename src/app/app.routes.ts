import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { FrontendPageComponent } from './pages/frontend-page/frontend-page.component';
import { BackendPageComponent } from './pages/backend-page/backend-page.component';
import { FullstackPageComponent } from './pages/fullstack-page/fullstack-page.component';
import { CybersecPageComponent } from './pages/cybersec-page/cybersec-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginFormComponent, title: 'BestCourses | Login'},
  {path: 'register', component: RegisterFormComponent, title: 'BestCourses | Register'},
  {path: 'courses', component: CoursesPageComponent, title: 'BestCourses | Courses',
    children: [
    {path: 'frontend', component: FrontendPageComponent, title: 'BestCourses | Frontend'},
    {path: 'backend', component: BackendPageComponent, title: 'BestCourses | Backend'},
    {path: 'fullstack', component: FullstackPageComponent, title: 'BestCourses | Fullstack'},
    {path: 'cybersec', component: CybersecPageComponent, title: 'BestCourses | Cybersec'},
    ]
  }
];
