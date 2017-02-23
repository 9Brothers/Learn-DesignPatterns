export abstract class CaffeineBeverageWithHook {
   PrepareRecipe(): void {
    this.BoilWater();
    this.Brew();
    this.PourInCup();
    
    if(this.CustomerWantsCondiments()) this.AddCondiments();
  }

  public abstract Brew(): void;

  public abstract AddCondiments(): void;

  BoilWater(): void {
    console.log("Boiling Water");
  }

  PourInCup(): void {
    console.log("Pouring int cup");
  }

  CustomerWantsCondiments():boolean {
    return true;
  }

  
}