import { Component, OnInit } from '@angular/core';
import { PayeesDaoService } from '../payees-dao.service';
import { Observable, throwError } from 'rxjs';
import { Payee } from '../../shared/banking-types';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styles: [],
})
export class PayeesListComponent implements OnInit {
  payees$: Observable<Payee[]>;
  payees: Payee[];

  constructor(private dao: PayeesDaoService, private route: ActivatedRoute) {}

  ngOnInit() {
    // const comp = this;
    this.payees$ = this.dao.getPayees().pipe(
      map((payees: Payee[]) => {
        const payeeName = this.route.snapshot.queryParams.payeeName.toUpperCase();
        return payees.filter(
          payee => payee.payeeName.toUpperCase().indexOf(payeeName) > -1
        );
      }),
      catchError(this.handleError),
    );

    // this.dao.getPayees().subscribe(payees => {
    this.payees$.subscribe(payees => {
      this.payees = payees;
      // this.payees = payees.filter(payee => payee.payeeName.indexOf('Inc') > -1);
    });
  }

  handleError(error: any) {
    // do something
    return throwError(error);
  }
}
