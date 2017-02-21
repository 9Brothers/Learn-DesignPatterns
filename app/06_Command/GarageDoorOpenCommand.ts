import { GarageDoor } from './GarageDoor';
import { ICommand } from './ICommand';

export class GarageDoorOpenCommand implements ICommand {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public Execute(): void {
    this.garageDoor.Open();
  }

  public Undo(): void {
    this.garageDoor.Close();
  }
}