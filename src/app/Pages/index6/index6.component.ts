import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-index6',
  standalone: true,
  imports: [],
  templateUrl: './index6.component.html',
  styleUrl: './index6.component.css'
})
export class Index6Component implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['Elvish Walters.', 'A Designer.', 'A Devloper.'],
        typeSpeed: 40,
        backSpeed: 40,
        showCursor: true,
        cursorChar: '',
        // loop: true
      };

      const typed = new Typed('.typed-element', options);
    }
  }
}
