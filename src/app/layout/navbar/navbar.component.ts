import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
  AfterViewChecked
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('navbar') navbar!: ElementRef;

  activeSection: string = 'home'; // Default section
  // clickAudio = new Audio('assets/images/click.wav');
  navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'credentials', label: 'Credentials', href: '#credentials' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  private isClickScrolling: boolean = false; // Flag to prevent scroll event during click scroll
  private scrollTimeout: any = null; // Timeout handler for scroll debounce

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any,
    private cdr: ChangeDetectorRef
  ) {
    // this.clickAudio.load();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId) && !this.isClickScrolling) {
      if (window.scrollY > 100) {
        this.renderer.addClass(this.navbar.nativeElement, 'stickyadd');
      } else {
        this.renderer.removeClass(this.navbar.nativeElement, 'stickyadd');
      }
      this.updateActiveSectionOnScroll();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onWindowScroll();
      this.updateActiveSectionOnScroll();
    }
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  // Method triggered when user clicks on a navigation item
  onNavItemClick(sectionId: string) {
    this.setActiveSection(sectionId);
    this.isClickScrolling = true; // Disable scroll-based section updates

    // Use a short timeout to allow the page to scroll before re-enabling scroll updates
    clearTimeout(this.scrollTimeout); // Clear any previous timeout
    this.scrollTimeout = setTimeout(() => {
      this.isClickScrolling = false; // Re-enable scroll-based updates
    }, 20); // Timeout period (1 second)
  }

  // Method to set the active section manually
  setActiveSection(sectionId: string) {
    this.activeSection = sectionId;
    // this.playClickSound();
  }

  private updateActiveSectionOnScroll() {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      // Increased threshold to handle small sections, considering 150px from the top
      if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    // Special case: When near the bottom of the page, ensure the last section is active
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrolledToBottom = window.scrollY + windowHeight >= pageHeight - 1;

    if (scrolledToBottom) {
      currentSectionId = sections[sections.length - 1].getAttribute('id') || '';
    }

    if (currentSectionId && !this.isClickScrolling) {
      this.activeSection = currentSectionId;
    }
  }

  // playClickSound() {
  //   this.clickAudio.play();
  // }
}
