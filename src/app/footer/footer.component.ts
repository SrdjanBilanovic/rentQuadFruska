import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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



