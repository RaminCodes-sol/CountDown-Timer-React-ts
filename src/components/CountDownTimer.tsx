
interface Props {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

const CountDownTimer:React.FC<Props> = ({ days, hours, minutes, seconds }) => {
    
  return (
    <section className='flex flex-wrap gap-10'>
        <div className="flex flex-col justify-center items-center w-[120px]">
            <h1>{Number(days) < 10 ? `0${days}`: days}</h1>
            <span>Days</span>
        </div>  
        <div className="flex flex-col justify-center items-center w-[120px]">
            <h1>{Number(hours) < 10 ? `0${hours}`: hours}</h1>
            <span>Hours</span>
        </div>
        <div className="flex flex-col justify-center items-center w-[120px]">
            <h1>{Number(minutes) < 10 ? `0${minutes}`: minutes}</h1>
            <span>Min</span>
        </div>
        <div className="flex flex-col justify-center items-center w-[120px]">
            <h1>{Number(seconds) < 10 ? `0${seconds}`: seconds}</h1>
            <span>Sec</span>
        </div>
  </section>
  )
}

export default CountDownTimer