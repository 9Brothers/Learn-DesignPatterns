import { CoffeeWithHook } from './CoffeeWithHook';
export class BeverageTestDrive {
  public static Run(): void {
    let coffeeHook = new CoffeeWithHook();

    console.log("\nMaking coffee...");
    coffeeHook.PrepareRecipe();
  }
}