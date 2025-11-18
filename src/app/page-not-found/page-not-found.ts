import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {RouteHome} from '../route-home';

@Component({
  selector: 'app-page-not-found',
  imports: [
    RouterLink,
    RouteHome
  ],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound {



}
