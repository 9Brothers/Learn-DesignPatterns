import { Mocha } from './Mocha';
import { HouseBlend } from './HouseBlend';
import { Expresso } from './Expresso';
import { Beverage } from './Beverage';
export abstract class StarbuzzCoffee {
  public static Run(): void {
    let beverage: Beverage = new Expresso();
    console.log(beverage.GetDescription() + " $" + beverage.Cost());

    let beverage2: Beverage = new HouseBlend();
    beverage2 = new Mocha(beverage2);
    console.log(beverage2.GetDescription() + " $" + beverage2.Cost());
  }
}