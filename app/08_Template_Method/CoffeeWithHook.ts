import { CaffeineBeverageWithHook } from './CaffeineBeverageWithHook';

export class CoffeeWithHook extends CaffeineBeverageWithHook {
  public Brew(): void {
    console.log("Dripping Coffee through filter");
  }

  public AddCondiments(): void {
    console.log("Adding Sugar and Milk");
  }

  public CustomerWantsCondiments(): boolean {
    let answer: string = this.GetUserInput();

    if(answer.toLowerCase().startsWith('y')) return true;

    return false;
  }

  public GetUserInput(): string {
    return 'no';
  }
}

