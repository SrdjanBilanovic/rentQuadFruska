import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  goDown1() {
    this.scroller.scrollToAnchor("reservation");
  }

}
