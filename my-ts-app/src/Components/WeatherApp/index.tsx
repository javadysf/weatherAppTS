import WAInput from "../Common/WAInput";
import WAButton from "../Common/WAButton";
import { useState }  from "react";
import React from "react";
import { axiosTest } from "../../Core/Services/api/Api";
// interface cityWeather  {
//   name: string;
//   local_names: {};
//   lat: Number;
//   lon: Number;
//   country: string;
// };


const index = () => {

  const getData = async() =>{
         const data:Array = await axiosTest();
         setw(data)
         console.log(data);
         
         
  }

  const [city,setCity]=useState("");
  const [w,setw]=React.useState<
  Array<{
    name: string;
      local_names: {};
      lat: Number;
      lon: Number;
      country: string;
  }>
>([])
  return (
    <div>
        <WAInput handleChange={(event)=>{setCity(event.target.value)}} name="hi"/>
       <WAButton handleClick={()=>axiosTest()} />
        {city}
    </div>
  )
}

export default index