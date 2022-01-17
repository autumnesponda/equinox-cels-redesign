import { Component, OnInit } from '@angular/core';
import {Constants} from "../../shared/constants";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  images = [
    {path: Constants.MediaUrlPrefix + "Eva/EOE_00_16.jpeg"},
    {path: Constants.MediaUrlPrefix + "Eva/NGE_EPISODE13_FULL.png"},
    {path: Constants.MediaUrlPrefix + "Eva/EOE_03_combined.jpg"},
    {path: Constants.MediaUrlPrefix + "Eva/NGE_misato_raw_00.jpg"},
    {path: Constants.MediaUrlPrefix + "Eva/EOE_02_A10.jpeg"},
    {path: Constants.MediaUrlPrefix + "Eva/NGE_misato_raw_01.jpg"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
