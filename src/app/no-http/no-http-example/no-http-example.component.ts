import { Component, OnInit } from '@angular/core';
import { PayeesDaoService } from 'src/app/payees/payees-dao.service';

@Component({
  selector: 'no-http-example',
  templateUrl: './no-http-example.component.html',
  styles: []
})
export class NoHttpExampleComponent implements OnInit {

  constructor(private dao: PayeesDaoService) { }

  ngOnInit() {
    this.dao.getPayees().subscribe(payees => {
      console.log(`Found ${payees.length} payees.`);
    });
  }

}
