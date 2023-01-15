import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public currentTime = new Date();
  public greetings = ['Good morning, my name is', 'Good afternoon, my name is', 'Good evening, my name is'];
  public defaultGreeting = '';

  constructor() {}

  ngOnInit(): void {
    const currentTime = new Date();

    if (currentTime.getHours() < 12) {
      this.defaultGreeting = this.greetings[0];
    } else if (currentTime.getHours() < 17) {
      this.defaultGreeting = this.greetings[1];
    } else {
      this.defaultGreeting = this.greetings[2];
    }

  }

}
