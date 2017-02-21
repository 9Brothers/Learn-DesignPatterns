import { NoCommand } from './NoCommand';
import { ICommand } from './ICommand';

export class RemoteControlWithUndo {
  onCommands: Array<ICommand>;
  offCommands: ICommand[];
  undoCommand: ICommand;

  constructor() {
    this.onCommands = new Array<ICommand>(7);
    this.offCommands = new Array<ICommand>(7);

    let noCommand = new NoCommand();

    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }

    this.undoCommand = noCommand;
  }

  public SetCommand(slot: number, onCommand: ICommand, offCommand: ICommand): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public OnButtonWasPushed(slot: number): void {
    this.onCommands[slot].Execute();
    this.undoCommand = this.onCommands[slot];
  }

  public OffButtonWasPushed(slot: number): void {
    this.offCommands[slot].Execute();
    this.undoCommand = this.offCommands[slot];
  }

  public UndoButtonWesPushed(): void {
    this.undoCommand.Undo();
  }

  public toString(): string {
    let stringBuild:string = "";

    stringBuild += "\n----- Remote Control -----\n";

    for(let i = 0; i < this.onCommands.length; i++) {
      stringBuild += "[slot " + i + "] " + this.onCommands[i].constructor.name + "  " + this.offCommands[i].constructor.name + "\n"

      stringBuild += "[slot " + i + "] " + this.onCommands[i].constructor.name + "  " + this.offCommands[i].constructor.name + "\n"
    }

    return stringBuild;
  }
}