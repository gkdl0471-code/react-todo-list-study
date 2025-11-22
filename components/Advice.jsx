import { useEffect, useState } from 'react'


export function Advice () {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://korean-advice-open-api.vercel.app/api/advice")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.error(err))
  }, [])
  return (
    <>
      <div className='adviceBox'>
        {data ? (
          <>
            <div>{data.message}</div>
            <div>- {data.author} -</div>
          </>
        ) : (
          <div>명언을 불러오는 중...</div>
        )}
      </div>
    </>
  )
}
