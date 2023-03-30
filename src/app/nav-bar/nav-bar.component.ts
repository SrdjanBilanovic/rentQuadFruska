import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  goDown1() {
    this.scroller.scrollToAnchor("reservation");
  }
  goDown2(){
  this.scroller.scrollToAnchor("homePage");
  }
  goDown3(){
    this.scroller.scrollToAnchor("onama");
    }
  goDown4(){
    this.scroller.scrollToAnchor("uslovi");
      }
}
