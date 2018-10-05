import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private first_name: string;
  private last_name: string;

  constructor() {
    this.first_name = 'Joshuah';
    this.last_name = 'Guerrero';
  }
  showGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'Hello ' + this.first_name + ' ' + this.last_name + '.';
  }

  hideGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'r2c1';
  }

  ngOnInit() {
  }

}
