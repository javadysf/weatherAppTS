import WAInput from "../Common/WAInput";
import WAButton from "../Common/WAButton";
import { useState }  from "react";
import { axiosTest } from "../../Core/Services/api/Api";
type cityWeather = {
  name: string;
  local_names: {};
  lat: Number;
  lon: Number;
  country: string;
};



const index = () => {

  const getData = async() =>{
         const data = await axiosTest();
         setw(data)
         debugger
         console.log(data);
          
  }

  const [city,setCity]=useState("");
  const [w,setw]=useState<cityWeather[]>([]);
  return (
    <div>
        <WAInput handleChange={(event)=>{setCity(event.target.value)}} name="hi"/>
       <WAButton handleClick={()=>getData()} />
        {city}
    </div>
  )
}

export default index