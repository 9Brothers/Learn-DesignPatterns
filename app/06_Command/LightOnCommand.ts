import { Light } from './Light';
import { ICommand } from './ICommand';

export class LightOnCommand implements ICommand {
  light: Light;

  

  constructor(light:Light) {
    this.light = light;
  }

  public Execute(): void {
    this.light.On();
  }

  public Undo(): void {
    this.light.Off();
  }
}