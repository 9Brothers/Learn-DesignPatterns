import { IFlyBehavior } from './IFlyBehavior';
import { IQuackBehavior } from './IQuackBehavior';

export abstract class Duck {
  constructor(flyBehavior?:IFlyBehavior, quackBehavior?:IQuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }
  
  private flyBehavior:IFlyBehavior;
  private quackBehavior:IQuackBehavior;

  public abstract display() : void;

  public performFly() : void {
    this.flyBehavior.fly();
  }

  public performQuack() {
    this.quackBehavior.quack();
  }

  public swim():void {
    console.log('All ducks float, even decoys!');
  }

  public set FlyBehavior(flyBehavior : IFlyBehavior) {
    this.flyBehavior = flyBehavior;
  }
  
  public set QuackBehavior(quackBehavior : IFlyBehavior) {
    this.flyBehavior = quackBehavior;
  }
}