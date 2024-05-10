import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'buy-button',
  templateUrl: './buy-button.component.html',
  styleUrl: './buy-button.component.scss'
})
export class BuyButtonComponent {
  @Input() buttonStyleClass: string = ""; 
  @Input() isActive: boolean = false; 
  @Input() text: string = "לתשלום"; 

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.buttonClicked.emit();
  }
}


