import { Duck } from './Duck';
import { Quack } from './Quack';
import { Squeak } from './Squeak';
import { FlyWithWings } from './FlyWithWings';

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Squeak());
  }

  public display():void {
    console.log("I'm a real Mallard duck");
  }
}
