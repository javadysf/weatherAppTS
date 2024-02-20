import axios from "axios";
type cityWeather = {
  base: string
  coord:{}
  cod: Number
  clouds: {}
  dt:number
  id:number
  weather: [{
    main: string,
    id: number,
    description: string,
    icon: string
  }];
  sys:{}
  visibility:number
  timezone:number
  main: {
    temp: number
  };
  name: string;
  wind:{}
};

const axiosTest = async(name:string):Promise<cityWeather|undefined>=> {
  const api = axios.create({
    baseURL:
      `https://api.openweathermap.org/data/2.5/weather?q=${name},&appid=5e06c9af8e2ce3776ccc77d2e8e48766`, // آدرس API مورد نظر
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
   const k = await api.get("")
   console.log(k.data);
   
      return k.data;
    }
catch (error) {
console.log(error);
     console.log(error);
  }
};
export { axiosTest };
