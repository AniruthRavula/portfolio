import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {

  @ViewChild('backToTopButton') backToTopButton: ElementRef | undefined;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.backToTopButton) {
      if (window.pageYOffset > 100) {
        this.backToTopButton.nativeElement.style.display = 'inline';
      } else {
        this.backToTopButton.nativeElement.style.display = 'none';
      }
    }
  }

  ngAfterViewInit() {
    // Initially hide the button
    if (this.backToTopButton) {
      this.backToTopButton.nativeElement.style.display = 'none';
    }
  }
}
