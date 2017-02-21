import { ICommand } from './ICommand';

export class SimpleRemoteControl {
  slot: ICommand;

  public set Command(value: ICommand) {
    this.slot = value;
  }

  public ButtonWasPressed():void {
    this.slot.Execute();
  }
}