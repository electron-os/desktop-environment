import { Injectable } from '@angular/core';
import * as Metro from 'metro4';

@Injectable({
  providedIn: 'root'
})

export class MetroService {

  constructor() { }

  getMetro(): any {
    return Metro;
  }
}
