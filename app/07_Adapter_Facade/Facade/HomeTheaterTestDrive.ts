import { HomeTheaterFacade } from './HomeTheaterFacade';
import { Amplifier } from './Amplifier';
import { MyTuner } from './MyTuner';
import { DvdPlayer } from './DvdPlayer';
import { CdPlayer } from './CdPlayer';
import { Projector } from './Projector';
import { TheaterLights } from './TheaterLights';
import { PopcornPopper } from './PopcornPopper';
import { Screen } from './Screen';

export abstract class HomeTheaterTestDrive {
  public static Run(): void {
    let homeTheater = new HomeTheaterFacade(new Amplifier(), new MyTuner(), new DvdPlayer(), new CdPlayer(), new Projector(), new TheaterLights(), new Screen(), new PopcornPopper());
    homeTheater.WatchMovie("Interestellar");
    homeTheater.EndMovie();
  }
}