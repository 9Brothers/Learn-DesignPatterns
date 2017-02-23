import { DvdPlayer } from './DvdPlayer';

export class Amplifier {
  dvd: DvdPlayer;

  On(): void {
    console.log("Amplifier On");
  }

  SetDvd(dvd: DvdPlayer): void {
    this.dvd = dvd;
  }

  SetSurroundSound(): void {
    console.log("Amplifier Set Surround");
  }

  SetVolume(v: number): void {
    console.log("Amplifier SetVolume" + v);
  }

  Off(): void {
    console.log("Amplifier Off");
  }
}