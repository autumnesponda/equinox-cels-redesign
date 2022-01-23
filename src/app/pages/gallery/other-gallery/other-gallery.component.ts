import { Component, OnInit } from '@angular/core';
import {Lightbox, LightboxConfig} from "ngx-lightbox";
import {Constants} from "../../../shared/constants";

@Component({
  selector: 'app-other-gallery',
  templateUrl: 'other-gallery.component.html'
})
export class OtherGalleryComponent implements OnInit {
  albums: Array<any> = [];

  constructor(private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
    _lightboxConfig.centerVertically = true;
    _lightboxConfig.showZoom = true;
    _lightboxConfig.showImageNumberLabel = true;

    for (let i = 0; i < Constants.OTHER_FILENAMES.length; i++) {
      let album = {
        src: Constants.OTHER_FILENAMES[i],
        caption: Constants.OTHER_CAPTIONS[i]
      };
      this.albums.push(album);
    }
  }

  ngOnInit(): void {}

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
