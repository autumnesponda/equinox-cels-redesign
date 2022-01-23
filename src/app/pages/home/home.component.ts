import { Component, OnInit } from '@angular/core';
import { Constants } from "../../shared/constants";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  images = [
    {path: Constants.MediaUrlPrefix + "Eva/EOE_00_16.jpeg"},
    {path: 'https://storage.googleapis.com/equinox-cels.com/jojo/cellthumbnail.jpg'},
    {path: Constants.MediaUrlPrefix + "Eva/NGE_EPISODE13_FULL.png"},
    {path: Constants.MediaUrlPrefix + "Eva/EOE_03_combined.jpg"},
    {path: 'https://storage.googleapis.com/equinox-cels.com/Other/RMS-099%20Rick%20Dias.jpg'},
    {path: Constants.MediaUrlPrefix + "Eva/EOE_02_A10.jpeg"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
