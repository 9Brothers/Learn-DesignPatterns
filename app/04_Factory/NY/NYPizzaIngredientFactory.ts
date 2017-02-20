import { ReggianoCheese } from './Ingredients/ReggianoCheese';
import { MarinaraSauce } from './Ingredients/MarinaraSauce';
import { SlicedPepperoni } from './Ingredients/SlicedPepperoni';
import { FreshClam } from './Ingredients/FreshClam';
import { ThinCrustDough } from './Ingredients/ThinCrustDough';
import { Dough } from '../Ingredients/Dough';
import { Sauce } from '../Ingredients/Sauce';
import { Cheese } from '../Ingredients/Cheese';
import { Veggies } from '../Ingredients/Veggies';
import { Garlic } from '../Ingredients/Garlic';
import { Onion } from '../Ingredients/Onion';
import { Mushroom } from '../Ingredients/Mushroom';
import { RedPepper } from '../Ingredients/RedPepper';
import { Pepperoni } from '../Ingredients/Pepperoni';
import { Clam } from '../Ingredients/Clam';
import { IPizzaIngredientFactory } from '../IPizzaIngredientFactory';

export class NYPizzaIngredientFactory implements IPizzaIngredientFactory {
  public CreateDough(): Dough {
    return new ThinCrustDough();
  }

  public CreateSauce(): Sauce {
    return new MarinaraSauce();
  }

  public CreateCheese(): Cheese {
    return new ReggianoCheese();
  }

  public CreateVeggies(): Array<Veggies> {
    console.log("Add NY Veggies");

    var veggies = new Array<Veggies>();
    veggies.push(new Garlic());
    veggies.push(new Onion());
    veggies.push(new Mushroom());
    veggies.push(new RedPepper());

    return veggies;
  }

  public CreatePepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  public CreateClam(): Clam {
    return new FreshClam();
  }
}