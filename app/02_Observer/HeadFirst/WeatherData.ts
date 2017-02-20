import { ISubject } from "./ISubject";
import { IObserver } from "./IObserver";

export class WeatherData implements ISubject {
  constructor() {
    this.observers = new Array<IObserver>();
  }

  private observers: Array<IObserver>;
  private temperature: number;
  private humidity: number;
  private pressure: number;
  
  public registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: IObserver): void {
    let i = this.observers.indexOf(observer);

    if(i >= 0) this.observers.splice(i, 0);
  }

  public notifyObservers():void {
    for (var i = 0; i < this.observers.length; i++) {
      let observer:IObserver = this.observers[i];
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }

  public setMeasurements(temperature:number, humidity:number, pressure:number):any {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
  

  
  private _value : string;
  public get value() : string {
    return this._value;
  }
  public set value(v : string) {
    this._value = v;
  }
  
}