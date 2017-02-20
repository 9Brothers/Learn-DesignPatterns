import { Dough } from '../Ingredients/Dough';
import { Sauce } from '../Ingredients/Sauce';
import { Veggies } from '../Ingredients/Veggies';
import { Cheese } from '../Ingredients/Cheese';
import { Pepperoni } from '../Ingredients/Pepperoni';
import { Clam } from '../Ingredients/Clam';

export abstract class Pizza {

  private _Name: string;
  public get Name(): string {
    return this._Name;
  }
  public set Name(v: string) {
    this._Name = v;
  }


  private _Dough: Dough;
  public get Dough(): Dough {
    return this._Dough;
  }
  public set Dough(v: Dough) {
    this._Dough = v;
  }


  private _Sauce: Sauce;
  public get Sauce(): Sauce {
    return this._Sauce;
  }
  public set Sauce(v: Sauce) {
    this._Sauce = v;
  }


  private _Veggies: Array<Veggies>;
  public get Veggies(): Array<Veggies> {
    return this._Veggies;
  }
  public set Veggies(v: Array<Veggies>) {
    this._Veggies = v;
  }


  private _Cheesse: Cheese;
  public get Cheese(): Cheese {
    return this._Cheesse;
  }
  public set Cheese(v: Cheese) {
    this._Cheesse = v;
  }


  private _Pepperoni: Pepperoni;
  public get Pepperoni(): Pepperoni {
    return this._Pepperoni;
  }
  public set Pepperoni(v: Pepperoni) {
    this._Pepperoni = v;
  }


  private _Clam: Clam;
  public get Clam(): Clam {
    return this._Clam;
  }
  public set Clam(v: Clam) {
    this._Clam = v;
  }

  public abstract Prepare(): void;

  public Bake(): void {
    console.log("Bake for 25 minutes at 350");
  }

  public Cut(): void {
    console.log("Cutting the pizza into diagonal slices");
  }

  public Box(): void {
    console.log("Place pizza in official PizzaStore box");
  }
}