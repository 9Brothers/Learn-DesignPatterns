import { Duck } from './Duck';
import { MallardDuck } from './MallardDuck';
import { ModelDuck } from './ModelDuck';
import { FlyRocketPowered } from './FlyRocketPowered';

let mallard:Duck = new MallardDuck();
mallard.performQuack();
mallard.performFly();
mallard.display();

let model:Duck = new ModelDuck();
model.performFly();
model.FlyBehavior = new FlyRocketPowered();
model.performFly()