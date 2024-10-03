import { Component, Input, ViewEncapsulation  } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-projectmodal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectmodal.component.html',
  styleUrls: ['./projectmodal.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class ProjectmodalComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;

  constructor(public modalRef: MdbModalRef<ProjectmodalComponent>) {}

  
}
