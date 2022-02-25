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
      let filename = Constants.FMA_FILENAMES[i];
      let image;
      if (filename.indexOf('|') != -1) {
        let filenames = filename.split('|');
        image = {
          src: filenames[0],
          caption: Constants.FMA_CAPTIONS[i],
          overlay: filenames[1]
        };

      } else {
        image = {
          src: Constants.FMA_FILENAMES[i],
          caption: Constants.FMA_CAPTIONS[i],
          overlay: null
        };
      }
      this.albums.push(image);
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
