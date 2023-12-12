/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id?: string;
  isOpen: boolean = false;

  private element: any;

  constructor(
    private modalService: ModalService,
    private el: ElementRef,
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    // add self (this modal instance) to the modal service so it can be opened from any component
    this.modalService.add(this);

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className.includes('modal-backdrop')) {
        this.close();
      }
    });
  }

  ngOnDestroy() {
    // remove self from modal service
    this.modalService.remove(this);

    // remove modal element from html
    this.element.remove();
  }

  open() {
    this.element.classList.remove('hidden');

    this.isOpen = true;
  }

  close() {
    this.element.classList.add('hidden');

    this.isOpen = false;
  }
}
