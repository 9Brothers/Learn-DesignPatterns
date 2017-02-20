import { Beverage } from './Beverage';

export abstract class CondimentsDecorator extends Beverage {  
  public abstract GetDescription() : string;
}