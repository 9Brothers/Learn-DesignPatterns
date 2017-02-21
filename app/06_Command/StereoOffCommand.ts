import { Stereo } from './Stereo';
import { ICommand } from './ICommand';

export class StereoOffCommand implements ICommand {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public Execute(): void {
    this.stereo.Off();
  }

  public Undo(): void {
    this.stereo.On();
    this.stereo.SetCD();
    this.stereo.SetVolume(11);
  }
}