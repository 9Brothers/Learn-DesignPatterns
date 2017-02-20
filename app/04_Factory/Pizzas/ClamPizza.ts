import { IPizzaIngredientFactory } from '../IPizzaIngredientFactory';
import { Pizza } from './Pizza';

export class ClamPizza extends Pizza {
  ingredientFactory: IPizzaIngredientFactory;

  constructor(ingredientFactory: IPizzaIngredientFactory) {
    super();

    this.ingredientFactory = ingredientFactory;
  }

  public Prepare(): void {
    console.log("Preparing " + this.Name);
    this.Cheese = this.ingredientFactory.CreateCheese();
    this.Clam = this.ingredientFactory.CreateClam();
  }
}