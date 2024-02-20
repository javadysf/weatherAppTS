import WAInput from "../Common/WAInput";
import WAButton from "../Common/WAButton";
import WeatherCard from "../WeatherApp/WeatherCard";
import { useState } from "react";
import { axiosTest } from "../../Core/Services/api/Api";
import WPic from "../../assets/p.jpg";
type cityWeather = {
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

const index = () => {
  const getData = async (name: string) => {
    const data = await axiosTest(name);
    console.log(data);
    setw(data);
  };

  const [city, setCity] = useState("");
  const [w, setw] = useState<cityWeather>();

  const temp = Math.floor(w?.main?.temp!) - 273;

  return (
    <div className="bg-amber-500 flex gap-5">
      <div>
        <img src={WPic} className="w-[730px] h-[730px]" />
      </div>
      <>
      </>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
        <WAInput
          handleChange={(event) => {
            setCity(event.target.value);
          }}
          name="hi"
        />
        <WAButton handleClick={() => getData(city)} />
        </div>
        <WeatherCard temp={temp} name={w?.name!} />
      </div>
    </div>
  );
};

export default index;
