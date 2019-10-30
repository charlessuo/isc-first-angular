import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payees-search',
  templateUrl: './payees-search.component.html',
  styles: [],
})
export class PayeesSearchComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  handleSearchField(searchText) {
    console.log('PayeesSearch: searching on ', searchText);
    this.router.navigate(['../list'], {
      relativeTo: this.route,
      queryParams: {
        payeeName: searchText,
      },
    });
    // this.router.navigate(['payees', 'list']);
    // this.router.navigateByUrl('payees/list');
  }
}
