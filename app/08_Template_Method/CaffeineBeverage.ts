export abstract class CaffeineBeverage {
  
  PrepareRecipe(): void {
    this.BoilWater();
    this.Brew();
    this.PourInCup();
    this.AddCondiments();
  }

  public abstract Brew(): void;

  public abstract AddCondiments(): void;

  BoilWater(): void {
    console.log("Boiling Water");
  }

  PourInCup(): void {
    console.log("Pouring int cup");
  }
}