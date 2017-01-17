/*
  // STRATEGY

  import { Duck } from './01_Strategy/Duck';
  import { MallardDuck } from './01_Strategy/MallardDuck';
  import { ModelDuck } from './01_Strategy/ModelDuck';
  import { FlyRocketPowered } from './01_Strategy/FlyRocketPowered';

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
import { WeatherStation } from "./02_Observer/WeatherStation";

new WeatherStation().run();