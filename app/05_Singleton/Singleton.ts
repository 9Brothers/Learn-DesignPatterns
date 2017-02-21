export class Singleton {
  private static _uniqueInstance: Singleton;

  public static get UniqueInstance() {
    if (this._uniqueInstance == null) this._uniqueInstance = new Singleton();

    return this._uniqueInstance
  }
}