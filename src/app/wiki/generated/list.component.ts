import { Component } from '@angular/core';


@Component({
  selector: 'app-list',
  template: `<ul><li><a routerLink='home'>home</a></li><li><a routerLink='sample-home'>sample-home</a></li></ul>`,
  styles: []
})
export class ListComponent {}
