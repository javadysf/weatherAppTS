type WeatherCardProps ={
    name : string,
    temp?:number,
}

const WeatherCard = (props:WeatherCardProps) => {

  return (
    <div className="w-[320px] h-[450px] rounded-2xl bg-blue-100">
        {props.name}
        {props.temp}
    </div>
  )
}

export default WeatherCard