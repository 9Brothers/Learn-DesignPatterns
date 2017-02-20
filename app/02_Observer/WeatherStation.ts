import { Measurement } from './Microsoft/Measurement';
// import { WeatherData } from "./HeadFirst/WeatherData";
// import { CurrentConditionsDisplay } from "./HeadFirst/CurrentConditionsDisplay";

import { MeasurementTracker } from './Microsoft/MeasurementTracker';
import { MeasurementReporter } from './Microsoft/MeasurementReporter';

export class WeatherStation {
  public run(): void {
    // HEAD FIRST
    // let weatherData: WeatherData = new WeatherData();
    // let currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    // // let statisticsDisplay = new StatisticsDisplay()

    // weatherData.setMeasurements(80, 65, 30.4);
    // weatherData.setMeasurements(82, 70, 29.2);
    // weatherData.setMeasurements(78, 90, 29.2);

    // MICROSOFT
    let provider: MeasurementTracker = new MeasurementTracker();
    let reporter: MeasurementReporter = new MeasurementReporter("Medidas");
    reporter.Subscribe(provider);

    let measurement1:Measurement = new Measurement();
    measurement1.Humidity = 80;
    measurement1.Pressure = 65;
    measurement1.Temperature = 30.4;

    provider.TrackMeasurement(measurement1);
    provider.EndTransmission();

    
    let measurement2: Measurement = new Measurement();
    measurement2.Humidity = 82;
    measurement2.Pressure = 70;
    measurement2.Temperature = 29.2;

    provider.TrackMeasurement(measurement2);

    reporter.Unsubscribe();
  }
}