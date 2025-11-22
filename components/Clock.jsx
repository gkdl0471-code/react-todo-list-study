import { useEffect, useState } from 'react'

export function Clock () {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
  const timer = 
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  return () => clearInterval(timer);
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

  return (
    <>
    <div className='dashboard-clock'>
      <div className='clock-label'>📅{formattedDate}</div>
      <div className='clock-time'>{formattedTime}</div>
    </div>
    </>
  )
}

