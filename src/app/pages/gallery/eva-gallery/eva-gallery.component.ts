import { Component, OnInit } from '@angular/core';
import { Constants } from "../../../shared/constants";
import {EvaModalGalleryComponent} from "../../../shared/components/eva-modal-gallery/eva-modal-gallery.component";
import {MdbModalService} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-eva-gallery',
  templateUrl: 'eva-gallery.component.html'
})
export class EvaGalleryComponent implements OnInit {
  fileUrls = Constants.EVA_FILENAMES;

  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  openDougaModal() {
    this.modalService.open(EvaModalGalleryComponent, {
      modalClass: 'modal-lg',
      data: { imageUrls: this.fileUrls[this.fileUrls.length - 1] }
    });
  }
}
