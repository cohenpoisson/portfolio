import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {Home} from './home/home';
import {Contact} from './contact/contact';
import {Projects} from './projects/projects';
import {PageNotFound} from './page-not-found/page-not-found';
import {Resume} from './resume/resume';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component:Home },
  {path: 'resume', component:Resume },
  {path: 'users', component:Home },
  {path: 'contact', component:Contact },
  {path: 'projects', component:Projects },
  {path: '**', component: PageNotFound}
];
