export interface IObserver<T> {
  OnCompleted(): void;
  OnError(): void;
  OnNext(value: T): void;
}