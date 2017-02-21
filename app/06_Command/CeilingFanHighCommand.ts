import { CeilingFan } from './CeilingFan';
import { EFanVelocities } from './EFanVelocities';
import { ICommand } from './ICommand';

export class CeilingFanHighCommand implements ICommand {
  ceilingFan: CeilingFan;
  prevSpeed: EFanVelocities;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  public Execute(): void {
    this.prevSpeed = this.ceilingFan.Speed;
    this.ceilingFan.High();
  }

  public Undo(): void {
    if (this.prevSpeed == EFanVelocities.HIGH) this.ceilingFan.High();
    else if (this.prevSpeed == EFanVelocities.MEDIUM) this.ceilingFan.Medium();
    else if (this.prevSpeed == EFanVelocities.LOW) this.ceilingFan.Low();
    else if (this.prevSpeed == EFanVelocities.OFF) this.ceilingFan.Off();
  }
}