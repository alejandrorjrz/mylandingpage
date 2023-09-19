import { useState } from "react";
import Input from "../../components/atoms/Input/Input.components";
import Button from "../../components/atoms/Button/Button.components";
import { useFetch } from "../../hooks/useFetch.hooks";
import Header from "../../components/moleculis/Header/Header.component";
import Footer from "../../components/moleculis/Footer/Footer.components";

//definimos la interface que ordenará los objetos en la tabla
// Generated by https://quicktype.io

export interface Weather {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: Text;
  icon: Icon;
  code: number;
}

export enum Icon {
  CDNWeatherapiCOMWeather64X64Day113PNG = "//cdn.weatherapi.com/weather/64x64/day/113.png",
  CDNWeatherapiCOMWeather64X64Day116PNG = "//cdn.weatherapi.com/weather/64x64/day/116.png",
  CDNWeatherapiCOMWeather64X64Day119PNG = "//cdn.weatherapi.com/weather/64x64/day/119.png",
  CDNWeatherapiCOMWeather64X64Night113PNG = "//cdn.weatherapi.com/weather/64x64/night/113.png",
  CDNWeatherapiCOMWeather64X64Night116PNG = "//cdn.weatherapi.com/weather/64x64/night/116.png",
}

export enum Text {
  Clear = "Clear",
  Cloudy = "Cloudy",
  PartlyCloudy = "Partly cloudy",
  Sunny = "Sunny",
}

export enum WindDir {
  Nnw = "NNW",
  Nw = "NW",
  Sw = "SW",
  W = "W",
  Wnw = "WNW",
  Wsw = "WSW",
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
}

export interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

const ElTiempo = () => {
  //estado del tiempo
  /* const [weather, setWeather] = useState<Weather | null>(null); */
  const [location, setLocation] = useState<string>("Caceres");

  const { data, isFetching, fetchData } = useFetch<Weather>({
    url: `https://api.weatherapi.com/v1/forecast.json?key=70e7fb61f7ee4dbdb9182329231307&q=${location}&days=5&aqi=no&alerts=no`,
  });

  return (
    <div className="flex flex-col h-screen md:h-full md:min-h-screen bg-slate-700">
      <Header/>
      <div className="flex flex-grow mx-5 items-center justify-center">
        <div className="my-2 mx-2 px-10 py-10 min-w-min bg-gradient-to-r from-sky-400 to-blue-500 rounded">
          {isFetching ? (
            <h1 className="text-xl text-slate-600 font-bold">CARGANDO...</h1>
          ) : (
            <>
              <div>
                <h1 className="text-xl text-slate-600 ">El Tiempo</h1>
              </div>
              <div className="grid gap-2 grid-cols-2 text-slate-800">
                <div className="">
                  <p className="text-3xl font-bold">{data?.location.name}</p>
                  <p>{data?.location.country}</p>
                  <p className="mt-1">{data?.location.localtime}</p>
                  {/* <p>{data?.current.}</p> */}
                </div>
                <div className="flex items-start justify-center">
                  <img className="w-28" src={data?.current.condition.icon} alt={data?.current.condition.text} />
                </div>
                <div className="flex col-span-2 justify-center">
                  <p className="text-6xl font-black text-slate-800">{data?.current.temp_c}º</p>
                </div>
              </div>
              <h1 className="mt-5 font-bold text-slate-600">Predicción</h1>
              <div>
                <div>
                  <div>
                    {data?.forecast.forecastday.map((item, index) => (
                      <div key={index}>
                        <div className="my-1 px-2 py-2 text-white bg-slate-500 rounded flex flex-row justify-between items-center gap-4">
                          <p>{item.date}</p>
                          <p>Max: {item.day.maxtemp_c}º</p>
                          <p>Med: {item.day.avgtemp_c}º</p>
                          <p>Min: {item.day.mintemp_c}º</p>
                          <p>
                            <img src={item.day.condition.icon} alt={item.day.condition.text} />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 font-semibold text-slate-800 flex justify-center">
                <Input
                  labelText="Ciudad: "
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>
              <div className="mt-5 flex justify-center">
                <Button type="submit" text="Actualizar" onClick={fetchData} />
              </div>
            </>
          )}
        </div>
      </div>
      <div>
          <Footer />
        </div>
    </div>
  );
};

export default ElTiempo;
