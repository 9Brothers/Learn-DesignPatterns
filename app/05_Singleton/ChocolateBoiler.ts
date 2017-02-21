export class ChocolateBoiler {
  private static uniqueInstance: ChocolateBoiler;

  private empty: boolean;
  private boiled: boolean;

  constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static GetInstance(): ChocolateBoiler {
    if (this.uniqueInstance) this.uniqueInstance = new ChocolateBoiler()

    return this.uniqueInstance;
  }

  public Fill(): void {
    if (this.IsEmpty()) {
      this.empty = false;
      this.boiled = false;
    }
  }

  public Drain(): void {
    if(!this.IsEmpty() && this.IsBoiled()) this.empty = true;    
  }

  public Boil():void {
    if (!this.IsEmpty() && !this.IsBoiled()) this.boiled = true;
  }

  public IsEmpty():boolean {
    return this.empty;
  }

  public IsBoiled():boolean {
    return this.boiled;
  }
}