import { Component, OnInit } from '@angular/core';

import { About} from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About;

    constructor() {
        this.about = new About('1', '2', '3');
    }

  ngOnInit() {
  }

}
