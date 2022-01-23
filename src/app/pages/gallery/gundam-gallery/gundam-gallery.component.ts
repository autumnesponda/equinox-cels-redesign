import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from "ngx-lightbox";
import { Constants } from "../../../shared/constants";

@Component({
  selector: 'app-gundam-gallery',
  templateUrl: 'gundam-gallery.component.html'
})
export class GundamGalleryComponent implements OnInit {
  albums: Array<any> = [];

  constructor(private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
    _lightboxConfig.centerVertically = true;
    _lightboxConfig.showZoom = true;
    _lightboxConfig.showImageNumberLabel = true;

    for (let i = 0; i < Constants.GUNDAM_FILENAMES.length; i++) {
      let album = {
        src: Constants.GUNDAM_FILENAMES[i],
        caption: Constants.GUNDAM_CAPTIONS[i]
      };
      this.albums.push(album);
    }
  }

  ngOnInit(): void {}

  open(index: number): void {
    this._lightbox.open(this.albums, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
