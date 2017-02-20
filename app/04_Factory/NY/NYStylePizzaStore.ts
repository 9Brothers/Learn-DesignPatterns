import { CheesePizza } from '../Pizzas/CheesePizza';
import { VeggiePizza } from '../Pizzas/VeggiePizza';
import { ClamPizza } from '../Pizzas/ClamPizza';
import { PepperoniPizza } from '../Pizzas/PepperoniPizza';
import { Pizza } from '../Pizzas/Pizza';
import { NYPizzaIngredientFactory } from './NYPizzaIngredientFactory';
import { IPizzaIngredientFactory } from '../IPizzaIngredientFactory';
import { PizzaStore } from '../PizzaStore';

export class NYStylePizzaStore extends PizzaStore {
  public CreatePizza(type: string): Pizza {
    let pizza:Pizza = null;
    let ingredientFactory:IPizzaIngredientFactory = new NYPizzaIngredientFactory();

    if(type == "cheese") {
      pizza = new CheesePizza(ingredientFactory);
      pizza.Name = "New York Style Cheese Pizza";
    } else if(type == "veggie") {
      pizza = new VeggiePizza(ingredientFactory)
      pizza.Name = "New York Style Veggie Pizza";
    } else if(type == "clam") {
      pizza = new ClamPizza(ingredientFactory)
      pizza.Name = "New York Style Clam Pizza";
    } else if(type == "pepperoni") {
      pizza = new PepperoniPizza(ingredientFactory)
      pizza.Name = "New York Style Pepperoni Pizza";
    }

    return pizza;
  }
}