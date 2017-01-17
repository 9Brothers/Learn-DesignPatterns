import { IObserver } from "./IObserver";
import { IDisplayElement } from "./IDisplayElement";
import { ISubject } from "./ISubject";

export class CurrentConditionsDisplay implements IObserver, IDisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display():void {
    console.log("Current conditions: " + this.temperature + "F degreen and " + this.humidity + "% humidity");
  }

}