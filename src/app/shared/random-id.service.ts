import { Injectable } from '@angular/core';
// import { random } from 'lodash';
// import random from 'lodash/random';
import * as lodash from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class RandomIdService {
  constructor() {  }

  getUniqueId() {
    return lodash.random(1000);
  }
}
