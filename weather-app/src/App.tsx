import axios, { Axios } from "axios"
import { useEffect, useState } from "react"

export default function App(){
  const[weather,setWeather]=useState<string>()
  const apikey="59e328b7508bd8b11184b96b94b63659"
  let tempData:any={}

  async function Weather(e:any){
    e.preventDefault()
    setWeather("")
    // console.log(weather)
    let temp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${apikey}`)
    tempData= temp.data
    console.log(tempData.weather?.[0]?.description)
  }
  return <>
    <div className="weather">
      <div className="inp">
        <input type="text" id="inp-weather" value={weather} onChange={e=>{setWeather(e.target.value)}}/>
        <button type="submit" onClick={e=>Weather(e)}>Report </button>
      </div>
       {tempData&&<div className="weather-name">
          {tempData.name}
      </div>}
      <div className="left-weather">
            {tempData.weather?.[0]?.description}
      </div>
      <div className="right-weather">

      </div>

    </div>
  </>
}