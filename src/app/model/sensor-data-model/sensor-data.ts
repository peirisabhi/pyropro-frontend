export class SensorData {
  temperature?: number;
  humidity?: number;
  time?: number;
  device_id?: string;
  co_detection?: number;
  co_level?: number;
  flame_detection?: boolean;
  soil_moisture_level?: number;
  bmp_temperature?:number;
  bmp_pressure?: number;
  bmp_sea_level_pressure?: number;
  bmp_altitude?: number;
  bmp_altitude_with_sea_level_pressure?: number;
  wind_rpm?: number;
  wind_speed?: number;
}
