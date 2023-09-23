import { useState, useEffect } from 'react'
import Timer from './Timer.js'
import Task from './Task.js'

function Home(props) {
let time=20;
const [color, setColor] = useState("rgb(186, 73, 73)")
const click = (color) => {
	setColor(color)
}
useEffect(() => {
document.body.style.backgroundColor = color;
}, [color])

	return (
		<>
		<div className='home_component'>
			<div className='first_row'>
				<div className='row second_row'>
					<div className='col button_col'>
						<button id='pomodoro' onClick = {() => click("rgb(186, 73, 73)")}>Pomodoro</button>
						<button id='shortBreack' onClick = {() => click("rgb(56,133,138)")}>Short Break</button>
						<button id='longBreack' onClick = {() => click("rgb(57,112,151)")}>Long Break</button>
					</div>
					<div className='timer_component'>
						<Timer timeing={time}/>
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