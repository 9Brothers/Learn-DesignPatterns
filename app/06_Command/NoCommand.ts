import { ICommand } from './ICommand';

export class NoCommand implements ICommand {
  public Execute(): void {
    
  }

  public Undo(): void {
    
  }
}