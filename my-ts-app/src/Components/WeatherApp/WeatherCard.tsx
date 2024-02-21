import { WeatherCardProps } from "../../Core/Utils/types";

const WeatherCard = ({ details }: WeatherCardProps) => {
  

  const url = `https://openweathermap.org/img/wn/${details.img}.png`;

  return (
    <div className="flex flex-col justify-center items-center w-[320px] h-[450px] rounded-2xl bg-blue-300 opacity-80 gap-8 p-8">
      <span className="flex gap-4">
        <img className="w-16 h-16" src={url} />
      </span>
      <h2 className="italic font-black text-3xl">{details.name}</h2>
      <hr className=" h-[10px] w-64 blue-900" />
      <h2 className="text-xl">Temp {details.temp} C</h2>
      <h2 className="text-xl">{details.main} </h2> 
      <h2 className="text-xl">{details.description} </h2>
    </div>
  );
};

export default WeatherCard;
