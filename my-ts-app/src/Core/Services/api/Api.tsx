import axios from "axios";
import { cityWeather, } from "../../Utils/types";

//Main function for getting Response from Api
const axiosTest = async(name:string):Promise<cityWeather|undefined>=> {
  const api = axios.create({
    baseURL:
      `https://api.openweathermap.org/data/2.5/weather?q=${name},&appid=5e06c9af8e2ce3776ccc77d2e8e48766`, // آدرس API مورد نظر
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
   const response = await api.get("")
      return response.data;
    }
catch (error) {
console.log(error);
  }
};
export { axiosTest };
