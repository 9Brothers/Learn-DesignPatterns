import { Beverage } from './Beverage';
import { CondimentsDecorator } from './CondimentsDecorator';

export class Mocha extends CondimentsDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public GetDescription():string {
    return this.beverage.GetDescription() + ", Mocha";
  }

  public Cost():number {
    return .20 + this.beverage.Cost();
  }
}