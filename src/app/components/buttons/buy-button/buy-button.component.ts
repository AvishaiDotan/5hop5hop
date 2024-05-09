import { Component, Input } from '@angular/core';

@Component({
  selector: 'buy-button',
  templateUrl: './buy-button.component.html',
  styleUrl: './buy-button.component.scss'
})
export class BuyButtonComponent {
  @Input() buttonStyleClass: string = ""; 
}
