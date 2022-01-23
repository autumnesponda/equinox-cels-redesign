import { Component, OnInit } from '@angular/core';
import {Lightbox, LightboxConfig} from "ngx-lightbox";
import {Constants} from "../../../shared/constants";

@Component({
  selector: 'app-fma-gallery',
  templateUrl: 'fma-gallery.component.html'
})
export class FmaGalleryComponent implements OnInit {
  albums: Array<any> = [];

  constructor(private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
    _lightboxConfig.centerVertically = true;
    _lightboxConfig.showZoom = true;
    _lightboxConfig.showImageNumberLabel = true;

    for (let i = 0; i < Constants.FMA_FILENAMES.length; i++) {
      let album = {
        src: Constants.FMA_FILENAMES[i],
        caption: Constants.FMA_CAPTIONS[i]
      };
      this.albums.push(album);
    }
  }

  ngOnInit(): void {
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
