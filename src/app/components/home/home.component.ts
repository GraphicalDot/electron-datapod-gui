
import {FormControl} from '@angular/forms';

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  title = 'app';

  pictures = [
    {
      id: 1,
      title: 'A natural view',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      id: 3,
      title: 'Favourite pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      id: 4,
      title: 'Abstract design',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
    },
    {
      id: 6,
      title: 'Nightlife',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
    },
  ];

  constructor() {
  }

}
