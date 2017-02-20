import { IObserver } from './IObserver';
import { IDisposable } from './IDisposable';
import { Measurement } from './Measurement';
import { IObservable } from './IObservable';

export class MeasurementReporter implements IObserver<Measurement>{
  private unsubcriber: IDisposable;
  private instName: string;

  private _Name: string;
  public get Name(): string {
    return this.instName;
  }

  public Subscribe(provider: IObservable<Measurement>): void {
    if(provider != null) this.unsubcriber = provider.Subscribe(this);
  }

  constructor(name: string) {
    this.instName = name;
  }

  OnCompleted(): void {
    console.log("The Measurement Tracker has completed transmitting data to "+ this.Name +".")
  }

  OnError(): void {
    console.log("{0}: The measurement cannot be determined.", this.Name)
  }

  OnNext(measurement: Measurement): void {
    console.log("Current conditions: " + measurement.Temperature + "F degrees and " + measurement.Humidity + "% humidity")
  }

  public Unsubscribe():void {
    this.unsubcriber.Dispose();
  }
}