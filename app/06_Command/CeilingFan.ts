import { EFanVelocities } from './EFanVelocities';

export class CeilingFan {
  location: string;

  private speed: EFanVelocities;
  public get Speed(): EFanVelocities {
    return this.speed;
  }

  constructor(location: string) {
    this.location = location;
    this.speed = EFanVelocities.OFF;
  }

  public High(): void {
    this.speed = EFanVelocities.HIGH;
  }

  public Medium(): void {
    this.speed = EFanVelocities.MEDIUM;
  }

  public Low(): void {
    this.speed = EFanVelocities.MEDIUM;
  }

  public Off(): void {
    this.speed = EFanVelocities.OFF;
  }
}