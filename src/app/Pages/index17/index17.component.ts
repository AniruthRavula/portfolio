import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import AOS from 'aos';
import { filter } from 'rxjs';
import Typed from 'typed.js';

@Component({
  selector: 'app-index17',
  standalone: true,
  imports: [],
  templateUrl: './index17.component.html',
  styleUrl: './index17.component.css',
})
export class Index17Component implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initEffects();

      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.initEffects();
        });
    }
  }

  private initEffects() {
    const options = {
      strings: ['Elvish Walters.', 'A Designer.', 'A Developer.'],
      typeSpeed: 40,
      backSpeed: 40,
      showCursor: true,
      cursorChar: '',
      // loop: true
    };

    const typed = new Typed('.typed-element', options);

    AOS.init();
  }
}
