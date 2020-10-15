import { Component, OnInit } from '@angular/core';
import { MetroService } from '../metro.service';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.sass']
})
export class LoadingPageComponent implements OnInit {

  constructor(private metroService : MetroService) { }

  ngOnInit(): void {
    this.metroService.getMetro().init();
  }

}
