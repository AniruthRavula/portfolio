import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-index1',
  standalone: true,
  imports: [],
  templateUrl: './index1.component.html',
  styleUrl: './index1.component.css',
})
export class Index1Component implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['Aniruth Ravula.', 'A Full Stack Java Developer.', 'A Machine Learning Engineer.', 'A Software Developer.', 'Aniruth Ravula.'],
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
