import WAInput from "../Common/WAInput";
import { useState } from "react";

const index = () => {

  const [city,setCity]=useState("");

  return (
    <div>
        <WAInput handleChange={(event)=>{setCity(event.target.value)}} name="hi"/>
        {city}
    </div>
  )
}

export default index