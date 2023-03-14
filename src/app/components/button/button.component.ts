import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color?: string;
  @Input() text?: string;
  @Output() addTaskBtn = new EventEmitter();

  onClick() {
    this.addTaskBtn.emit();
  }
}
