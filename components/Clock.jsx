import { useEffect, useState } from 'react'

export function Clock () {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const API_KEY = "0f054b4501d279ac9453ec8a1b80ed7b";

  useEffect(() => {
  const timer = 
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  return () => clearInterval(timer);
  },[]);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=${API_KEY}&units=metric&lang=kr`);
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("날씨 불러오기 실패:", err);
      }
    }
    fetchWeather();
  },[]);

  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, '0');
  const day = String(time.getDate()).padStart(2, '0');

  const formattedDate = `TODAY : ${year}-${month}-${day}`;

  const formattedTime = time.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const weatherline = weather ? (<div className="weather-box">
          <div className="weather-temp">{weather.main.temp}°C, {weather.weather[0].description}</div>
        </div>)
      : (<div className="weather-loading">날씨 불러오는 중...</div>)

  return (
    <>
    <div className='dashboard-clock'>
      <div className='clock-label'>📅 {formattedDate}</div>
      <div className='weather-temp'>🌏 WEATHER : {weatherline}</div>
      <div className='clock-time'>{formattedTime}</div>
    </div>
  
    </>
  );
}

