import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  scrollToId(id: string) {
    const e = document.getElementById(id.startsWith('#') ? id.substring(1) : id);
    if (e != null)
      e.scrollIntoView({ behavior: 'smooth' });
  }
}
