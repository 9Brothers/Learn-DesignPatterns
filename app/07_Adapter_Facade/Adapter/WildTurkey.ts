import { ITurkey } from './ITurkey';

export class WildTurkey implements ITurkey {
  public Gobble(): void {
    console.log("Gobble gobble");
  }

  public Fly(): void {
    console.log("I'm flying a short distance");
  }
}