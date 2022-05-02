import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the navbar
    const navbar = document.getElementById("navbar");

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      // console.log(document);
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        navbar?.classList.add("navbar-scroll")
        navbar?.classList.add("shadow-sm")
      } else {
        navbar?.classList.remove("navbar-scroll");
        navbar?.classList.remove("shadow-sm")
      }
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
