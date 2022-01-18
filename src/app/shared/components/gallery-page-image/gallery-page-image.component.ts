import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery-page-image',
  templateUrl: 'gallery-page-image.component.html'
})
export class GalleryPageImageComponent implements OnInit {
  @Input() imageUrl!: string
  @Input() title!: string
  @Input() subtitle?: string
  @Input() galleryPageLink!: string

  constructor() { }

  ngOnInit(): void {
  }

}
