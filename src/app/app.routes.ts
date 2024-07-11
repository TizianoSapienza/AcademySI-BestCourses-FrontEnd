import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CourseGeneralComponent } from './components/course-general/course-general.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { FrontendPageComponent } from './pages/frontend-page/frontend-page.component';
import { BackendPageComponent } from './pages/backend-page/backend-page.component';
import { FullstackPageComponent } from './pages/fullstack-page/fullstack-page.component';
import { CybersecPageComponent } from './pages/cybersec-page/cybersec-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'courses', component: CoursesPageComponent,
    children: [
    {path: 'frontend', component: FrontendPageComponent},
    {path: 'backend', component: BackendPageComponent},
    {path: 'fullstack', component: FullstackPageComponent},
    {path: 'cybersec', component: CybersecPageComponent},
    ]
  }
];
