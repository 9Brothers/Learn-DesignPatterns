import { ITurkey } from './ITurkey';
import { IDuck } from './IDuck';

export class TurkeyAdapter implements IDuck {
  turkey: ITurkey;

  constructor(turkey: ITurkey) {
    this.turkey = turkey;
  }    

  public Quack(): void {
    this.turkey.Gobble();
  }

  public Fly(): void {
    for (var i = 0; i < 5; i++) {
      this.turkey.Fly();
    }
  }
}