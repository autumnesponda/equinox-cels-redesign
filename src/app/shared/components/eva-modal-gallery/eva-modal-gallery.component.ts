import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-eva-modal-gallery',
  templateUrl: 'eva-modal-gallery.component.html'
})
export class EvaModalGalleryComponent implements OnInit {
  imageUrls!: string

  constructor(public modalRef: MdbModalRef<EvaModalGalleryComponent>) {}

  ngOnInit(): void {
  }

}
