import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-index15',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index15.component.html',
  styleUrl: './index15.component.css',
})
export class Index15Component implements OnInit {
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
