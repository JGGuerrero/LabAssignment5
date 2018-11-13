import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private first_name: string;
  private last_name: string;

  constructor(private router: Router) {
    this.first_name = 'Joshuah';
    this.last_name = 'Guerrero';
  }

  goToPage(path: string){
    console.log('from goToPage path: ', path);
    this.router.navigate([path]);
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
