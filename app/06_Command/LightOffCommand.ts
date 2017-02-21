import { Light } from './Light';
import { ICommand } from './ICommand';

export class LightOffCommand implements ICommand {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public Execute(): void {
    this.light.Off();
  }

  public Undo(): void {
    this.light.On();
  }
}