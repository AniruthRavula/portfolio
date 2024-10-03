import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index16',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index16.component.html',
  styleUrl: './index16.component.css'
})
export class Index16Component implements AfterViewInit {

  slides = [
    { title: 'Elvish Walters', subtitle: 'Hello & Welcome', image: 'assets/images/home-bg-6.jpg' },
    { title: 'A Designer', subtitle: 'Hello & Welcome', image: 'assets/images/home-bg-6.jpg' },
    { title: 'A Developer', subtitle: 'Hello & Welcome', image: 'assets/images/home-bg-6.jpg' }
  ];



  ngAfterViewInit(): void {
    // Access slickModal here after view initialization
    // console.log(this.slickModal);
  }
}
