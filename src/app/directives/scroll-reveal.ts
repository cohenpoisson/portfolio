import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollReveal {
  private observer!: IntersectionObserver;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transform = 'translateY(30px)';
    this.el.nativeElement.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.el.nativeElement.style.opacity = '1';
            this.el.nativeElement.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    this.observer.observe(this.el.nativeElement);
  }
}
