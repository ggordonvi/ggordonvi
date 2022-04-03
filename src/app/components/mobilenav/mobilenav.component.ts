import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.css']
})
export class MobilenavComponent implements OnInit {

  public navOverlayWidth = "0";

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.navOverlayWidth = "100%";

  }

  closeMenu() {
    this.navOverlayWidth = "0";
  }

}
