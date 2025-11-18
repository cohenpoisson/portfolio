import {Directive, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appRouteHome]'
})
export class RouteHome {

  constructor(private router: Router) { }
  @HostListener('click')
  onClick(){
    this.router.navigate(['/home']);
    console.log("clicked")
  }
}
