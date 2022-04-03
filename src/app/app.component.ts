import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mobile = false;

  constructor() {}

  ngOnInit(): void {
    // Initially set mobile flag on component load
    if (window.innerWidth < 992) {
      this.mobile = true;
    }
    
  }

  // Listen to window resize events and depening on our flag
  // check for our 992px switch over
  // *This might be too bulky - look for a better solution
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.mobile && event.target.innerWidth > 992) {
      this.mobile = false;
    }
    if (!this.mobile && event.target.innerWidth < 992) {
      this.mobile = true;
    }
  }

}
