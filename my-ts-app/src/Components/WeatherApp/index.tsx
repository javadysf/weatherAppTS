import WAInput from "../Common/WAInput";
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

  const [w, setw] = useState<cityWeather>();

  const details ={
     temp : Math.floor(w?.main?.temp!) - 273,
     img : w?.weather[0].icon!,
     main: w?.weather[0].main!,
     description:w?.weather[0].description!,
     name:w?.name!
  }

  return (
    <div className="bg-blue-100 justify-between flex gap-5">
      <div>
        <img src={WPic} className="w-[730px] h-[730px]" />
      </div>
      <div className="flex w-[50%] gap-16 flex-col items-center">
        <div className="flex">
        <WAInput
          handleChange={(event) => {
            getData( event.target.value)
          }}
          name="hi"
        />
        </div>{w?<WeatherCard details={details} />:""}
        
      </div>
    </div>
  );
};

export default index;
