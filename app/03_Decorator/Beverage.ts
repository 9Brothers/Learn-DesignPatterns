export abstract class Beverage {
  protected Description: string = "Unknown Beverage";
  
  constructor(description?: string) {
    if(description) this.Description = description;
  }
  
  public GetDescription(): string {
    return this.Description;
  }

  public abstract Cost(): number;
}