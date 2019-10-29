import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-button',
  templateUrl: './event-button.component.html',
  styles: []
})
export class EventButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    console.log('EventButtonComponent handle click');
  }

  handleAction(event: number) {
    console.log('EventButtonComponent handling (action) from DemoButtonComponent');
    console.log('EventButtonComponent: event information: ', event);
  }

}
