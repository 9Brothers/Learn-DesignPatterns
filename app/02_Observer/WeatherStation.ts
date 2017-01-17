import { WeatherData } from "./WeatherData";
import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";

export class WeatherStation {
  public run():void {
    let weatherData: WeatherData = new WeatherData();
    let currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    // let statisticsDisplay = new StatisticsDisplay()

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);
  }
}