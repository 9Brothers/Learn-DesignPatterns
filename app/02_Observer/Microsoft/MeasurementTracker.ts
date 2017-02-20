import { IObservable } from './IObservable';
import { Measurement } from './Measurement';
import { IObserver } from './IObserver';
import { IDisposable } from './IDisposable';
import { ArrayHelpers } from '../../ArrayHelpers';

export class MeasurementTracker implements IObservable<Measurement> {
  private observers: Array<IObserver<Measurement>>;

  constructor() {
    this.observers = new Array<IObserver<Measurement>>();
  }

  public Subscribe(observer: IObserver<Measurement>): IDisposable {
    if(!ArrayHelpers.Contains(observer, this.observers)) this.observers.push(observer);

    return new Unsubscriber(this.observers, observer);
  }

  public TrackMeasurement(measurement: Measurement): void {
    for (let o of this.observers) {
      o.OnNext(measurement);
    }
  }

  public EndTransmission(): void {
    for(let o of this.observers) {
      if(ArrayHelpers.Contains(o, this.observers)) o.OnCompleted();
    }
  }
  
}

class Unsubscriber implements IDisposable {
  private _observers: Array<IObserver<Measurement>> = [];
  private _observer: IObserver<Measurement> = null;

  constructor(observers: Array<IObserver<Measurement>>, observer: IObserver<Measurement>) {
    this._observers = observers;
    this._observer = observer;
  }

  Dispose(): void {
    if (this._observer !== null && ArrayHelpers.Contains(this._observer, this._observers)) ArrayHelpers.Remove(this._observer, this._observers);
  }
}



