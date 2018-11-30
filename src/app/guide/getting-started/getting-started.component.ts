import { Component } from '@angular/core';
import { PlatformPickerService } from '../../platform-picker/platform-picker.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
  // `os` > `is` for readability here; but `is` makes sense within `PlatformPickerService` class
  os: PlatformPickerService['is'];

  constructor(public platformPickerService: PlatformPickerService) {
    this.os = platformPickerService.is.bind(platformPickerService);
  }
}
