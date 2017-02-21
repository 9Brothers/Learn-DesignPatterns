import { StereoOffCommand } from './StereoOffCommand';
import { StereoOnWithCDCommand } from './StereoOnWithCDCommand';
import { CeilingFanHighCommand } from './CeilingFanHighCommand';
import { LightOffCommand } from './LightOffCommand';
import { CeilingFan } from './CeilingFan';
import { Stereo } from './Stereo';
import { LightOnCommand } from './LightOnCommand';
import { Light } from './Light';
import { RemoteControlWithUndo } from './RemoteControlWithUndo';

export abstract class RemoteLoader {
  public static Run(): void {
    let remoteControl = new RemoteControlWithUndo();

    let livingRoomLight = new Light("Living Room");
    let kitchenLight = new Light("Kitchen");
    let stereo = new Stereo("Living Room", "Killswitch Engage");
    let ceilingFan = new CeilingFan("Bedroom");

    var livingRoomLightOn = new LightOnCommand(livingRoomLight);
    var livingRoomLightOff = new LightOffCommand(livingRoomLight);
    var kitchenLightOn = new LightOnCommand(kitchenLight);
    var kitchenLightOff = new LightOffCommand(kitchenLight);
    var ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);

    var stereoOnWithCD = new StereoOnWithCDCommand(stereo);
    var stereoOffWithCD = new StereoOffCommand(stereo);

    remoteControl.SetCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.SetCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.SetCommand(2, stereoOnWithCD, stereoOffWithCD);
    remoteControl.SetCommand(3, ceilingFanHigh, stereoOffWithCD);

    remoteControl.OnButtonWasPushed(0);
    remoteControl.OffButtonWasPushed(0);
    console.log(remoteControl);
    remoteControl.UndoButtonWesPushed();
    remoteControl.OffButtonWasPushed(0);
    remoteControl.OnButtonWasPushed(0);
    console.log(remoteControl);
    remoteControl.UndoButtonWesPushed();

    remoteControl.OnButtonWasPushed(1);
    remoteControl.OffButtonWasPushed(1);

    remoteControl.OnButtonWasPushed(2);
    remoteControl.OffButtonWasPushed(2);

    remoteControl.OnButtonWasPushed(3);
    console.log(remoteControl);
    remoteControl.UndoButtonWesPushed();
  }
}