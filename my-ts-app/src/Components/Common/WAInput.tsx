import { ChangeEvent } from "react"
type WAInputType = {
  handleChange?: (event: ChangeEvent<HTMLInputElement>)=>void,
}

const WAInput = (props:WAInputType) => {

  return (
   <div className="flex gap-4 p-8 max-sm:p-1 ">
   <div className="text-3xl font-black max-sm:text-lg" >Enter City Name</div>
   <input className="w-48 border rounded p-2 max-sm:w-24 max-sm:h-[35px]" onChange={props.handleChange} />
   </div>
  )
}

export default WAInput