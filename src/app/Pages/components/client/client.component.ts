import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any; // Import Bootstrap if not already imported

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements AfterViewInit {
  // clickAudio = new Audio('assets/images/click.wav');
  constructor() {
    // Preload the audio
    // this.clickAudio.load();
  }
  ngAfterViewInit() {
    // Initialize Bootstrap Carousel manually
    const carouselElement = document.querySelector('#carouselExampleInterval');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 7000
      });
    }
  }

  // playClickSound() {
  //   this.clickAudio.play();
  // }
}
