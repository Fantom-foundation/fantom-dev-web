import { Component } from '@angular/core';


@Component({
  selector: 'app-list',
  template: `<ul><li><a routerLink='api'>api</a></li><li><a routerLink='architecture-results'>architecture-results</a></li><li><a routerLink='architecture'>architecture</a></li><li><a routerLink='core-components'>core-components</a></li><li><a routerLink='framework'>framework</a></li><li><a routerLink='home'>home</a></li><li><a routerLink='installing-lachesis'>installing-lachesis</a></li><li><a routerLink='lachesis-design'>lachesis-design</a></li><li><a routerLink='usage'>usage</a></li></ul>`,
  styles: []
})
export class ListComponent {}
