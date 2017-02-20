import { Beverage } from './Beverage';

export class Expresso extends Beverage {
  constructor() {
    super();

    this.Description = "Expresso";
  }

  public Cost(): number {
    return 1.99;
  }
}