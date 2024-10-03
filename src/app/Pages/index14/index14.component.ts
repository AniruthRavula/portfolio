import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-index14',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index14.component.html',
  styleUrls: ['./index14.component.css'],
})
export class Index14Component implements OnInit {
  ngOnInit(): void {
    new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
