import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {Home} from './home/home';
import {About} from './about/about';
import {Contact} from './contact/contact';
import {Projects} from './projects/projects';
import {PageNotFound} from './page-not-found/page-not-found';
// every import being neat like that was not intended actually so cool
export const routes: Routes = [
  {path: 'home', component:Home },
  {path: 'about', component:About },
  {path: 'contact', component:Contact },
  {path: 'projects', component:Projects },
  {path: '**', component: PageNotFound}
];
