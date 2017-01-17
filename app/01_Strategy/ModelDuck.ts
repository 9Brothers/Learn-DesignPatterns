import { Duck } from './Duck';
import { FlyNoWay } from './FlyNoWay';
import { Quack } from './Quack';

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }

  public display() : void {
    console.log("I'm a model duck");
  }
}