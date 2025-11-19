import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {ScrollReveal} from '../directives/scroll-reveal';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    NgOptimizedImage,
    ScrollReveal
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  spinText(event: Event) {
    const element = event.target as HTMLElement;
    element.classList.add('spinning');

    setTimeout(() => {
      element.classList.remove('spinning');
    }, 600);
  }
}
