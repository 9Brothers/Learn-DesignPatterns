import { IPizzaIngredientFactory } from '../IPizzaIngredientFactory';
import { Pizza } from './Pizza';

export class VeggiePizza extends Pizza {
  ingredientFactory: IPizzaIngredientFactory;

  constructor(ingredientFactory: IPizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public Prepare(): void {
    console.log("Preparing " + this.Name);
    this.Veggies = this.ingredientFactory.CreateVeggies();
  }
}