import { Pizza } from './Pizzas/Pizza';
import { NYStylePizzaStore } from './NY/NYStylePizzaStore';
import { PizzaStore } from './PizzaStore';
export abstract class PizzaTestDrive {
  public static Run():void {
    let nyStore: PizzaStore = new NYStylePizzaStore();

    let pizza: Pizza = nyStore.OrderPizza("cheese");
    console.log("Ethan ordered a " + pizza.Name + "\n\n");
  }
}