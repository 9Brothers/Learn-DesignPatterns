import { Beverage } from './Beverage';

export class HouseBlend extends Beverage {
  constructor() {
    super();
    
    this.Description = "House Blend Coffe";
  }

  public Cost(): number {
    return .89;
  }
}