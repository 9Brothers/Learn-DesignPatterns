import { Stereo } from './Stereo';

export class StereoOnWithCDCommand {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public Execute(): void {
    this.stereo.On();
    this.stereo.SetCD();
    this.stereo.SetVolume(11);
  }

  public Undo(): void {
    this.stereo.Off();
  }
}