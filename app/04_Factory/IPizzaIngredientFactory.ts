import { Dough } from './Ingredients/Dough';
import { Sauce } from './Ingredients/Sauce';
import { Cheese } from './Ingredients/Cheese';
import { Veggies } from './Ingredients/Veggies';
import { Pepperoni } from './Ingredients/Pepperoni';
import { Clam } from './Ingredients/Clam';

export interface IPizzaIngredientFactory {
  CreateDough(): Dough;
  CreateSauce(): Sauce;
  CreateCheese(): Cheese;
  CreateVeggies(): Array<Veggies>;
  CreatePepperoni(): Pepperoni;
  CreateClam(): Clam;
}