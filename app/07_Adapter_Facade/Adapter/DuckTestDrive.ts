import { TurkeyAdapter } from './TurkeyAdapter';
import { IDuck } from './IDuck';
import { WildTurkey } from './WildTurkey';

export abstract class DuckTestDrive {
  public static Run(): void {
    let turkey: WildTurkey = new WildTurkey();
    let turkeyAdapter: IDuck = new TurkeyAdapter(turkey);

    console.log("The Turkey says...");
    turkey.Gobble();
    turkey.Fly();

    console.log("\nThe TurkeyAdapter says...");
    this.TestDuck(turkeyAdapter);
  }

  private static TestDuck(duck: IDuck) {
    duck.Quack();
    duck.Fly();
  }
}