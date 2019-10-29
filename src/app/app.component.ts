import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myAwesomeCompany = {
    name: 'Google'
  }

  title = 'first-angular';

  handleClick() {
    console.log('AppComponent handle click');
  }

  handleAction(event: number) {
    console.log('AppComponent handling (action) from DemoButtonComponent');
    console.log('AppComponent: event information: ', event);
  }
}
