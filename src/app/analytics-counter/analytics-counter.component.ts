import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-analytics-counter',
  template: `
    <p>
      analytics-counter works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Native
})
export class AnalyticsCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
