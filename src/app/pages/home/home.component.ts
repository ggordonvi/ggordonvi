import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public currentTime = new Date();
  public greetings = ['good morning', 'good afternoon', 'good evening'];
  public defaultGreeting = '';
  // public world = document.getElementById('world');

  constructor() {}

  ngOnInit(): void {
    const currentTime = new Date();
    const world = document.getElementById('ellipse1466');

    // console.log(currentTime.toLocaleDateString("en-US"));
    // console.log(currentTime.getHours() + ":" + currentTime.getMinutes());

    if (currentTime.getHours() < 12) {
      this.defaultGreeting = this.greetings[0];
    } else if (currentTime.getHours() < 17) {
      this.defaultGreeting = this.greetings[1];
    } else {
      this.defaultGreeting = this.greetings[2];
    }

    if (currentTime.getHours() < 7 || currentTime.getHours() > 19) {
      console.log("night");
      world?.classList.remove('day');
      world?.classList.add('night');
    } else if (currentTime.getHours() < 17) {
      world?.classList.remove('night');
      world?.classList.add('day');
    }

  }

}
