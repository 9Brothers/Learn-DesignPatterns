import { IFlyBehavior } from './IFlyBehavior';

export class FlyWithWings implements IFlyBehavior {
  fly():void {
    console.log("I'm flying!");
  }
}