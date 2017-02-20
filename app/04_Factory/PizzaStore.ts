import { Pizza } from './Pizzas/Pizza';

export abstract class PizzaStore {
  public OrderPizza(type: string): Pizza {
    let pizza: Pizza = this.CreatePizza(type);
    pizza.Prepare();
    pizza.Bake();
    pizza.Cut();
    pizza.Box();

    return pizza;
  }

  public abstract CreatePizza(type: string): Pizza;
}