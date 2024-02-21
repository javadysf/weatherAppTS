import WAInput from "../Common/WAInput";
import WeatherCard from "../WeatherApp/WeatherCard";
import { cityWeather } from "../../Core/Utils/types";
import { useState } from "react";
import { axiosTest } from "../../Core/Services/api/Api";
import WPic from "../../assets/p.jpg";

const index = () => {
  const getData = async (name: string) => {
    const data = await axiosTest(name);
    setWeatherData(data);
  };

  const [WeatherData, setWeatherData] = useState<cityWeather>();

  //creating an object for weatherCard details
  const details = {
    temp: Math.floor(WeatherData?.main?.temp!) - 273,
    img: WeatherData?.weather[0].icon!,
    main: WeatherData?.weather[0].main!,
    description: WeatherData?.weather[0].description!,
    name: WeatherData?.name!,
  };

  return (
    <div className="bg-blue-100 justify-between flex gap-5 max-sm:flex-col">
      <div>
        <img src={WPic} className="w-[730px] h-[730px]" />
      </div>
      <div className="flex w-[50%] gap-16 flex-col items-center max-sm:w-full">
        <div className="flex">
          <WAInput
            handleChange={(event) => {
              getData(event.target.value);
            }}
          />
        </div>
          {/* if WeatherData is available show the weatherCard */}
        {WeatherData&&<WeatherCard details={details} />}
      </div>
    </div>
  );
};

export default index;
