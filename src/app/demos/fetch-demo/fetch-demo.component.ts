import { Component, OnInit } from '@angular/core';
import { DemosDaoService } from '../demos-dao.service';
import { Person } from 'src/app/shared/banking-types';

@Component({
  selector: 'app-fetch-demo',
  templateUrl: './fetch-demo.component.html',
  providers: [DemosDaoService],
  styles: [],
})
export class FetchDemoComponent implements OnInit {
  people: Person[] = [];
  constructor(private dao: DemosDaoService) {}

  ngOnInit() {}

  fetchPeople() {
    this.dao.getPeople().subscribe(people => (this.people = people));
  }
}
