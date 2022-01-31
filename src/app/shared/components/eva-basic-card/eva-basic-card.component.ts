import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-eva-basic-card',
  templateUrl: 'eva-basic-card.component.html'
})
export class EvaBasicCardComponent implements OnInit {
  @Input() mainImageUrl!: string
  @Input() overlayImageUrl?: string
  @Input() title!: string
  @Input() subtitle!: string
  @Input() cut!: string
  @Input() celInfo!: string
  @Input() body!: string

  constructor() { }

  ngOnInit(): void {
  }

}
