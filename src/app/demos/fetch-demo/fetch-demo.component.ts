import { Component, OnInit, OnDestroy } from '@angular/core';
import { DemosDaoService } from '../demos-dao.service';
import { Person } from 'src/app/shared/banking-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fetch-demo',
  templateUrl: './fetch-demo.component.html',
  providers: [DemosDaoService],
  styles: [],
})
export class FetchDemoComponent implements OnInit, OnDestroy {
  people: Person[] = [];
  subscription: Subscription;

  constructor(private dao: DemosDaoService) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  fetchPeople() {
    this.subscription = this.dao.getPeople().subscribe(people => (this.people = people));
  }
}
