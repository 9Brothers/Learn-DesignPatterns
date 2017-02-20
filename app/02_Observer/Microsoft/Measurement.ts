export class Measurement {

  private _Temperature: number;
  public get Temperature(): number {
    return this._Temperature;
  }
  public set Temperature(t: number) {
    this._Temperature = t;
  }

  private _Humidity: number;
  public get Humidity(): number {
    return this._Humidity;
  }
  public set Humidity(h: number) {
    this._Humidity = h;
  }

  private _Pressure: number;
  public get Pressure(): number {
    return this._Pressure
  }
  public set Pressure(p: number) {
    this._Pressure = p;
  }
}