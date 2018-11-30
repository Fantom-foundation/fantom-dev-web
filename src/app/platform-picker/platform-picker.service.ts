import { Injectable } from '@angular/core';

export type Platform = 'macOS' | 'Linux' | 'Windows';


@Injectable({
  providedIn: 'root'
})
export class PlatformPickerService {
  platforms: Platform[] = [
    'macOS', 'Linux', 'Windows'
  ];
  private _platform: string;

  constructor() {
    const platForm = localStorage.getItem('platform');
    if (platForm == null)
      this._platform = this.platforms[1];
  }

  // public get platform(): string {
  public getPlatform(): string {
    const platForm = localStorage.getItem('platform');
    return platForm == null ? this._platform : platForm;
  }

  public is(platform: Platform): boolean {
    return this.getPlatform() === platform;
  }

  // public set platform(platForm: string) {
  public setPlatform(platForm: Platform) {
    this._platform = platForm;
    localStorage.setItem('platform', platForm);
  }
}
