import { IPizzaIngredientFactory } from '../IPizzaIngredientFactory';
import { Pizza } from './Pizza';

export class CheesePizza extends Pizza {
  ingredientFactory: IPizzaIngredientFactory;

  constructor(ingredientFactory: IPizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public Prepare():void {
    console.log("Preparing: " + this.Name);

    this.Sauce = this.ingredientFactory.CreateSauce();
    this.Cheese = this.ingredientFactory.CreateCheese();
  }
}