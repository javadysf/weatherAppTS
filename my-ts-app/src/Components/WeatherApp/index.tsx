import WAInput from "../Common/WAInput";
import WAButton from "../Common/WAButton";
import { useState } from "react";
import { axiosTest } from "../../Core/Services/api/Api";

const index = () => {

  const [city,setCity]=useState("");
  const [w,setw]=useState("");

  return (
    <div>
        <WAInput handleChange={(event)=>{setCity(event.target.value)}} name="hi"/>
       <WAButton handleClick={()=>axiosTest()} />
        {city}
    </div>
  )
}

export default index