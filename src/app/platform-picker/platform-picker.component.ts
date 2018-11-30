import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Platform, PlatformPickerService } from './platform-picker.service';

@Component({
  selector: 'app-platform-picker',
  templateUrl: './platform-picker.component.html',
  styleUrls: ['./platform-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlatformPickerComponent implements OnInit {
  platformSelectd: string;

  constructor(public platformPickerService: PlatformPickerService) {
  }

  ngOnInit() {
    this.platformSelectd = this.platformPickerService.getPlatform();
  }

  updateService(event: {value?: Platform}) {
    if (event.value != null) this.platformPickerService.setPlatform(event.value);
  }
}
