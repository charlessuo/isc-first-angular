import { Component, OnInit } from '@angular/core';
import { DemosDaoService } from '../demos-dao.service';
import { Person } from 'src/app/shared/banking-types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fetch-demo',
  templateUrl: './fetch-demo-async.component.html',
  providers: [DemosDaoService],
  styles: [],
})
export class FetchDemoAsyncComponent implements OnInit {
  people$: Observable<Person[]> = this.dao.getPeople();

  constructor(private dao: DemosDaoService) {}

  ngOnInit() {}

}
