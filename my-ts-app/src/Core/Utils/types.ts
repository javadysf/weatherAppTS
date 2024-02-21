export type cityWeather = {
  base: string;
  coord: {};
  cod: Number;
  clouds: {};
  dt: number;
  id: number;
  weather: [
    {
      main: string;
      id: number;
      description: string;
      icon: string;
    }
  ];
  sys: {};
  visibility: number;
  timezone: number;
  main: {
    temp: number;
  };
  name: string;
  wind: {};
};
export type WeatherCardProps = {
    details: {
      name: string;
      temp?: number;
      img: string;
      description: string;
      main: string;
    };
  };