import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'payees-search',
  templateUrl: './payees-search.component.html',
  styles: []
})
export class PayeesSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSearchField(searchText) {
    console.log('PayeesSearch: searching on ', searchText);
  }

}
