import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch.hooks";
import { useNavigate } from "react-router-dom";

//definimos la interface que ordenará los objetos en la tabla
export interface Weather {
  location: Location;
  current:  Current;
}

export interface Current {
  last_updated_epoch: number;
  last_updated:       string;
  temp_c:             number;
  temp_f:             number;
  is_day:             number;
  condition:          Condition;
  wind_mph:           number;
  wind_kph:           number;
  wind_degree:        number;
  wind_dir:           string;
  pressure_mb:        number;
  pressure_in:        number;
  precip_mm:          number;
  precip_in:          number;
  humidity:           number;
  cloud:              number;
  feelslike_c:        number;
  feelslike_f:        number;
  vis_km:             number;
  vis_miles:          number;
  uv:                 number;
  gust_mph:           number;
  gust_kph:           number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name:            string;
  region:          string;
  country:         string;
  lat:             number;
  lon:             number;
  tz_id:           string;
  localtime_epoch: number;
  localtime:       string;
}


const WeatherCard = () => {
  //estado del tiempo
  /* const [weather, setWeather] = useState<Weather | null>(null); */
  const [location] = useState<string>("Caceres");

  const navigate = useNavigate();

  const { data, isFetching } = useFetch<Weather>({
    url: `https://api.weatherapi.com/v1/current.json?key=70e7fb61f7ee4dbdb9182329231307&q=${location}&aqi=no`,
  });

  return (
    <div onClick={() => navigate("/eltiempo")} className="cursor-pointer">
      <div className="w-52 bg-slate-800/50 rounded-2xl">
        {isFetching ? (
          <h1 className="text-xl text-slate-600 font-bold">CARGANDO...</h1>
        ) : (
          <>
            <div className="mt-10 grid gap-2 grid-cols-3  text-slate-200 text-xs items-center">
              <div>
                <p className="font-black">{data?.location.name}</p>
                <p>{data?.location.country}</p>
              </div>
              <div className="justify-self-end">
                <img className="" src={data?.current.condition.icon} alt={data?.current.condition.text} />
              </div>
              <div>
                <p className="text-center text-2xl text-slate-200">{data?.current.temp_c}º</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
