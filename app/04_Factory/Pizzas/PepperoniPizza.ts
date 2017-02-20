import { Pizza } from './Pizza';
import { IPizzaIngredientFactory } from '../IPizzaIngredientFactory';

export class PepperoniPizza extends Pizza {
  ingredientFactory: IPizzaIngredientFactory

  constructor(ingredientFactory: IPizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public Prepare(): void {
    console.log("Preparing " + this.Name);
    this.Pepperoni = this.ingredientFactory.CreatePepperoni(); 
  }
}