import './App.css';
import TimerCard from './component/TimerCard';
import { useEffect, useState } from 'react';
import logo from './assets/timart-logo.webp'


function App() {
  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [days, setDays] = useState(16);
  const end = Date.parse('February 16, 2022')
  
  useEffect(() => {
    const updateTimer = () => {
      const start = Date.now()
      const distance = end - start;
      if(distance <= 0) return
      let currentDays = Math.floor(distance/(1000*60*60*24))
      let currentHours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
      let currentMinutes = Math.floor((distance%(1000*60*60))/(1000*60))
      let currentSeconds = Math.floor((distance%(1000*60))/1000)
      setDays(currentDays)
      setHrs(currentHours)
      setMins(currentMinutes)
      setSecs(currentSeconds)
    }
    const timeInterval = setInterval(updateTimer, 1000)
    return () => {
      clearInterval(timeInterval)
    };
  }, [end]);
  
  return (
    <div className="App">
      <div className='header'>
        <img src={logo} alt='' />
      </div>
      <div className='body'>
        <p className='caption'>Shop at your convenience with Quick Shop, pay online and have your items delivered to your door-step.</p>
        <h1 className='coming-soon'>Coming Soon!</h1>
        <div className='timer-container'>
          <TimerCard value={days < 10 ? '0' + days: days} type={days < 2 ? 'day' : 'days'}/> 
          <TimerCard value={hrs < 10 ? '0' + hrs: hrs} type={hrs < 2? 'hour' : 'hours'}/>
          <TimerCard value={mins < 10 ? '0' + mins: mins} type={mins < 2? 'minute' : 'minutes'}/>
          <TimerCard value={secs < 10 ? '0' + secs: secs} type={secs < 2? 'second': 'seconds'}/>
        </div>
      </div>
      <div className='footer'>
          <p>Quicktel Solution &copy; 2022</p>
      </div>
    </div>
  );
}

export default App;
