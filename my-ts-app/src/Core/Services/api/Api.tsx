import axios from "axios";
// type cityWeather = {
//   name: string;
//   local_names: {};
//   lat: Number;
//   lon: Number;
//   country: string;
// };
async function axiosTest() {
  
  // const api = axios.create({
  //   baseURL: 'http://api.openweathermap.org/geo/1.0/direct?q=tehran,&appid=5e06c9af8e2ce3776ccc77d2e8e48766', // آدرس API مورد نظر
    
  //   // headers: {
  //   //   Authorization: 'Bearer 5e06c9af8e2ce3776ccc77d2e8e48766', // توکن دریافتی
  //   // },
  // });
  axios.get("http://api.openweathermap.org/geo/1.0/direct?q=tehran,&appid=5e06c9af8e2ce3776ccc77d2e8e48766",{ headers: { 'Content-Type': 'application/json'}})
  .then(response => {
    console.log(response.data);
    
    return (response.data);
  })
  .catch(error => {
    console.error('خطا در دریافت اطلاعات:', error);
  });

    // try {
    //   const response = await axios.get(
    //     `http://api.openweathermap.org/geo/1.0/direct?q=tehran,&appid=5e06c9af8e2ce3776ccc77d2e8e48766`
    //   );
    //   console.log(response.data); // Log the response data
    //   return response.data;
    // } catch (error) {
    //   console.log(error);
    // }
  }
export { axiosTest };
