import { Component, OnInit } from '@angular/core';
import { Constants } from "../../../shared/constants";

@Component({
  selector: 'app-eva-gallery',
  templateUrl: 'eva-gallery.component.html'
})
export class EvaGalleryComponent implements OnInit {
  fileUrls = Constants.EVA_FILENAMES;

  constructor() { }

  ngOnInit(): void {
  }

}
