import { Component, OnInit } from '@angular/core';
import { MetroService } from '../metro.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.sass']
})

export class DesktopComponent implements OnInit {
  metro: any;
  $: any;
  componentsStatus = {
    startMenuSide: false ,
    startMenu: false
  };
  powerbuttonPopOverContent: string;

  constructor(private metroService : MetroService) {
    this.metro = this.metroService.getMetro();
    this.$ = this.metro.$();
    this.setPowerbuttonPopOverContent();
  }

  ngOnInit(): void {
    this.metro.init();
  }

  expandStartMenuSide(status: boolean): void {
    this.componentsStatus.startMenuSide = status;
  }

  toggleComponent(name: string): void {
    this.componentsStatus[name] = !this.componentsStatus[name];
  }

  setPowerbuttonPopOverContent(): void {
    this.powerbuttonPopOverContent = "<div class='powerButtonPopOver'><ul>" +
    "<li><a><i class='mi mi-PowerButton icon'></i>Shut down</a></li>" +
    "<li><a><i class='mi mi-PowerButton icon'></i>Restart</a></li>" +
    "<li><a><i class='mi mi-PowerButton icon'></i>Sleep</a></li>" +
    "</ul></div>";
  }
}
