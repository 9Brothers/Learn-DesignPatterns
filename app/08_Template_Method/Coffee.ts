import { CaffeineBeverage } from './CaffeineBeverage';

export class Coffee extends CaffeineBeverage {
  // PrepareRecipe(): void {
  //   this.BoilWater();
  //   this.BrewCoffeeGrinds();
  //   this.PourInCup();
  //   this.AddSugarAndMilk();
  // }

  public Brew(): void {
    console.log("Dripping Coffee through filter");
  }

  public AddCondiments(): void {
    console.log("Adding Sugar and Milk");
  }
}