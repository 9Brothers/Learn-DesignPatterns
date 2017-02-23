import { PopcornPopper } from './PopcornPopper';
import { TheaterLights } from './TheaterLights';
import { Projector } from './Projector';
import { CdPlayer } from './CdPlayer';
import { DvdPlayer } from './DvdPlayer';
import { MyTuner } from './MyTuner';
import { Amplifier } from './Amplifier';
import { Screen } from './Screen';

export class HomeTheaterFacade {
  amp: Amplifier;
  tuner: MyTuner;
  dvd: DvdPlayer;
  cd: CdPlayer;
  projector: Projector;
  lights: TheaterLights;
  screen: Screen;
  popper: PopcornPopper;

  constructor(
    amp: Amplifier,
    tuner: MyTuner,
    dvd: DvdPlayer,
    cd: CdPlayer,
    projector: Projector,
    lights: TheaterLights,
    screen: Screen,
    popper: PopcornPopper
  ) {
    this.amp = amp;
    this.tuner = tuner;
    this.dvd = dvd;
    this.cd = cd;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }

  public WatchMovie(movie: string): void {
    console.log("Get ready to watch a movie...");
    this.popper.On();
    this.popper.Pop();
    this.lights.Dim(10);
    this.screen.Down();
    this.projector.On();
    this.projector.WideScreenMode();
    this.amp.On();
    this.amp.SetDvd(this.dvd);
    this.amp.SetSurroundSound();
    this.amp.SetVolume(5);
    this.dvd.On();
    this.dvd.Play(movie);
  }

  public EndMovie(): void {
    console.log("Shconsoutting movie theater down...");

    this.popper.Off();
    this.lights.On();
    this.screen.Up();
    this.projector.Off();
    this.amp.Off();
    this.dvd.Stop();
    this.dvd.Eject();
    this.dvd.Off();
  }
}