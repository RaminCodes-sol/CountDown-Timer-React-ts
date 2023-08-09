import { useEffect, useState, useRef } from "react"
import CountDownTimer from "./components/CountDownTimer"




const App = () => {
  const [remainningTime, setRemainingTime] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  })


  let intervalRef = useRef<any>(null);


  /*-------StartTimer-Function-------*/
  const startTimer = () => {
    const countDownDate = new Date("August 11, 2023 00:00:00").getTime()

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString()
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)).toString()
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)).toString()
      const seconds = Math.floor(distance % (1000 * 60) / 1000).toString()


      if (distance < 0) {
        clearInterval(intervalRef.current)
      } else {
        setRemainingTime({ days, hours, minutes, seconds })
      }
    }, 1000)

  }

  /*-------ComponentDidMount-------*/
  useEffect(() => {
    startTimer()
    return () => clearInterval(intervalRef.current)
  }, [])



  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <CountDownTimer 
        days={remainningTime.days} 
        hours={remainningTime.hours} 
        minutes={remainningTime.minutes} 
        seconds={remainningTime.seconds}
      />
    </main>
  )
}

export default App
