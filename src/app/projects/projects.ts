import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-projects',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardImage
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

}
