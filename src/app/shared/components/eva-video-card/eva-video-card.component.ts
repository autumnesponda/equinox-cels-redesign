import {Component, Input, OnInit} from '@angular/core';
import {EvaModalGalleryComponent} from "../eva-modal-gallery/eva-modal-gallery.component";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-eva-video-card',
  templateUrl: 'eva-video-card.component.html'
})
export class EvaVideoCardComponent implements OnInit {
  modalRef: MdbModalRef<EvaModalGalleryComponent> | null = null;

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() cut!: string;
  @Input() celInfo!: string;
  @Input() body!: string;
  @Input() fileUrls!: string[];

  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.open(EvaModalGalleryComponent, {
      modalClass: 'modal-lg',
      data: { imageUrls: this.fileUrls }
    });
  }
}
