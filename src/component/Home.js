import { useState, useEffect,useRef } from 'react'
import Timer from './Timer.js'
import Task from './Task.js'

function Home(props) {
let time=20*60;
let shortbreacktime =5*60;
let longbreacktime =15*60;
const [color, setColor] = useState("rgb(186, 73, 73)")

const backgroundChange = (color) => {
	setColor(color)
}
useEffect(() => {
document.body.style.backgroundColor = color;
}, [color])

  const [timer, setTimer] = useState(time);
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick = useRef();
  // let pomodorotimercount;
  
  if (start=== false) {
    console.log("End time :",timer);
    // localStorage.setItem('pomodoro-time',timer);
    // pomodorotimercount=timer;
  }
  
  useEffect(() => {
    if (firstStart.current) {
      console.log("first render, don't run useEffect for timer");
      firstStart.current = !firstStart.current;
      return;
    }

    console.log("subsequent renders");
    console.log(start);
    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 100);
    } else {
      console.log("clear interval");
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [start]);

  const toggleStart = () => {
    setStart(!start);
  };

  const dispSecondsAsMins = (seconds) => {
    console.log("seconds :" + seconds);
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    return mins.toString() + ":" + (seconds_ === 0 ? "00" : seconds_.toString());
  };
  const pomodorotime =()=>{
    console.log("pomodoro function called :")
    setTimer(time);
  }
  const shortBreack =() =>{
    console.log("shortBreack function called : ")
    setTimer(shortbreacktime);
  }
  const longBreack =() =>{
    console.log("longBreack function called : ")
    setTimer(longbreacktime);
  }
	return (
		<>
		<div className='home_component'>

			<div className='first_row'>
	
				<div className='row second_row'>

					<div className=' button_col'>

						<button id='pomodoro' onClick = {() => {backgroundChange("rgb(186, 73, 73)");pomodorotime()}}>Pomodoro</button>
						<button id='shortBreack' onClick = {() => {backgroundChange("rgb(56,133,138)");shortBreack()}}>Short Break</button>
						<button id='longBreack' onClick = {() => {backgroundChange("rgb(57,112,151)");longBreack()}}>Long Break</button>
					</div>
					<div className='timer-div '>

						<Timer dispSecondsAsMins={dispSecondsAsMins} timer={timer} />

            <div className="startDiv text-center">

              <button className="startBut" onClick={toggleStart}>
                {!start ? "START" : "STOP"}
              </button> 

            </div>

					</div>

				</div>

					<div className='pomodoro_count text-center'>#1</div>
					<div className='taskName text-center'>Time to focus!</div>
					<Task />

			</div>
		</div>
		</>
	);
}

export default Home