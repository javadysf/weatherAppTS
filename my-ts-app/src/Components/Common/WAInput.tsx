import { ChangeEvent } from "react"
type WAInputType = {
  name: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>)=>void,
}

const WAInput = (props:WAInputType) => {

  return (
   <div className="flex gap-2 p-8 ">
   <div className="text-3xl font-bold" >Enter City Name</div>
   <input className="w-48 border rounded p-2" onChange={props.handleChange} />
   </div>
  )
}

export default WAInput