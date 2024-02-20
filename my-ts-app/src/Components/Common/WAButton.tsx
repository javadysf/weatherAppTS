import { MouseEvent } from "react"
type WAButtonType = {
  handleClick?: (city:string)=>void,
}

const WAButton= (props:WAButtonType) => {

  return (
   <button className="w-48 border rounded p-2" onClick={props.handleClick}>pusH</button>
  ) 
};

export default WAButton