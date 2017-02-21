import { GarageDoorOpenCommand } from './GarageDoorOpenCommand';
import { GarageDoor } from './GarageDoor';
import { LightOnCommand } from './LightOnCommand';
import { Light } from './Light';
import { SimpleRemoteControl } from './SimpleRemoteControl';

export abstract class RemoteControlTest {
  public static Run(): void {
    let remote = new SimpleRemoteControl();

    let light = new Light();
    let lightOn = new LightOnCommand(light);

    remote.Command = lightOn;
    remote.ButtonWasPressed();

    let garageDoor = new GarageDoor();
    let garageDoorOpen = new GarageDoorOpenCommand(garageDoor)

    remote.Command = garageDoorOpen;
    remote.ButtonWasPressed();
  }
}