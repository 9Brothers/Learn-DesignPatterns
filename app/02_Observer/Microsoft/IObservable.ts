import { IDisposable } from './IDisposable';
import { IObserver } from './IObserver';

export interface IObservable<T> {
  Subscribe(observer: IObserver<T>):IDisposable;
}