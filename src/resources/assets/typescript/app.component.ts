import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'my-app',
  styleUrls: ['../sass/app.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class='container'>
      <div class='row'>
        <div class='col-md-12'>
          hello world
        </div>
      </div>
    </div>
  `
})
export class AppComponent { }

