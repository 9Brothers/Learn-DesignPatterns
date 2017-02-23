import { CaffeineBeverage } from './CaffeineBeverage';

export class Tea extends CaffeineBeverage {
  // PrepareRecipe(): void {
  //   this.BoilWater();
  //   this.SteepTeaBag();
  //   this.PourInCup();
  //   this.AddLemon();
  // }

  public Brew(): void {
    console.log("Steeping the tea");
  }

  public AddCondiments(): void {
    console.log("Adding Lemon");
  }
}