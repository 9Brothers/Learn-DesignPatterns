import { BeverageTestDrive } from './08_Template_Method/BeverageTestDrive';
import { HomeTheaterTestDrive } from './07_Adapter_Facade/Facade/HomeTheaterTestDrive';
import { DuckTestDrive } from './07_Adapter_Facade/Adapter/DuckTestDrive';
import { RemoteLoader } from './06_Command/RemoteLoader';
import { RemoteControlTest } from './06_Command/RemoteControlTest';
import { PizzaTestDrive } from './04_Factory/PizzaTestDrive';
import { Duck } from './01_Strategy/Duck';
import { MallardDuck } from './01_Strategy/MallardDuck';
import { ModelDuck } from './01_Strategy/ModelDuck';
import { FlyRocketPowered } from './01_Strategy/FlyRocketPowered';
import { WeatherStation } from "./02_Observer/WeatherStation";
import { StarbuzzCoffee } from './03_Decorator/StarbuzzCoffee';

/*
  // STRATEGY
  let mallard:Duck = new MallardDuck();
  mallard.performQuack();
  mallard.performFly();
  mallard.display();

  let model:Duck = new ModelDuck();
  model.performFly();
  model.FlyBehavior = new FlyRocketPowered();
  model.performFly()
*/

 
// OBSERVER
// new WeatherStation().run();


// DECORATOR
// StarbuzzCoffee.Run();

// FACTORY
// PizzaTestDrive.Run();

// COMMAND
// RemoteControlTest.Run();
// RemoteLoader.Run();

// ADAPTER
// DuckTestDrive.Run();

// FACADE
// HomeTheaterTestDrive.Run()

// TEMPLATE METHOD
BeverageTestDrive.Run()