import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PayeesDaoService } from 'src/app/payees/payees-dao.service';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styles: [],
})
export class DemoButtonComponent implements OnInit {
  @Input()
  label = 'Click me';

  @Output()
  action = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  handleClick(event: MouseEvent) {
    console.log('You clicked on the button');
    this.action.emit('Some action happened');
  }
}
