import { Component, OnInit } from '@angular/core';
import { MetroService } from '../metro.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.sass']
})

export class DesktopComponent implements OnInit {

  constructor(private metroService : MetroService) { }

  ngOnInit(): void {
    this.metroService.getMetro().init();
  }

}
