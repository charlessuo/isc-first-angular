import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RandomIdService } from '../random-id.service';
import { PayeesDaoService } from 'src/app/payees/payees-dao.service';

@Component({
  selector: 'single-search-field',
  templateUrl: './single-search-field.component.html',
  styles: []
})
export class SingleSearchFieldComponent implements OnInit {

  @Input()
  label: string;

  @Output()
  searchField = new EventEmitter<string>();

  searchText = '';
  inputId: string;

  constructor(private idService: RandomIdService) { }

  ngOnInit() {
    this.inputId = 'ssf_' + this.idService.getUniqueId();
  }

  handleClick() {
    this.searchField.emit(this.searchText);
  }

}
