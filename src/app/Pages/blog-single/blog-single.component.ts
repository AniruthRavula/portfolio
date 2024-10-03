import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-single',
  standalone: true,
  imports: [],
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.css'
})
export class BlogSingleComponent implements AfterViewInit {
  @ViewChild('navbar') navbar!: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.pageYOffset > 100) {
        // Adjust the scroll position threshold as needed
        this.renderer.addClass(this.navbar.nativeElement, 'stickyadd');
      } else {
        this.renderer.removeClass(this.navbar.nativeElement, 'stickyadd');
      }
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize the navbar state
      this.onWindowScroll();
    }
  }

  private updateActiveSectionOnScroll() {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= 100 && sectionTop >= -100) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });
  }
}

