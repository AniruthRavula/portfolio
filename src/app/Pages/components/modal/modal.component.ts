

import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;

  constructor(public modalRef: MdbModalRef<ModalComponent>) {}
}
