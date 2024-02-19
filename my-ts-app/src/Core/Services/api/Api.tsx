import axios from "axios";
import { useState } from "react";
type cityWeather = {
  name?: string;
  local_names?: {};
  lat?: Number;
  lon?: Number;
  country?: string;
};

const axiosTest=async()=>{
  const api = axios.create({
    baseURL: 'https://api.openweathermap.org/geo/1.0/direct?q=tehran,&appid=5e06c9af8e2ce3776ccc77d2e8e48766', // آدرس API مورد نظر
    headers: {
      'Content-Type': 'application/json'
    },
  });
  api.get("").then(response => {
   return response.data[0];
  })
  .catch(error => {
    console.error('خطا در دریافت اطلاعات:', error);
  });
  }
export { axiosTest };
