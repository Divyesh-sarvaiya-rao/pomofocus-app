import React from 'react';
import Timer from './Timer.js'

function Home(props) {
let time =props.time;

const pomoDoro = () =>{
	document.getElementById('root').style.backgroundColor='rgb(186, 73, 73)';
	document.getElementById('shortBreack').style.backgroundColor='transparent'
	document.getElementById('longBreack').style.backgroundColor='transparent'
	document.getElementById('pomodoro').style.backgroundColor='#25181940'
}
const shortBreack = ()=> {
	document.getElementById('root').style.backgroundColor='#38858A';
	document.getElementById('shortBreack').style.backgroundColor='#25181940'
	document.getElementById('pomodoro').style.backgroundColor='transparent'
	document.getElementById('longBreack').style.backgroundColor='transparent'
}
const longBreack = () =>{
	document.getElementById('root').style.backgroundColor='#397097';
	document.getElementById('longBreack').style.backgroundColor='#25181940'
	document.getElementById('pomodoro').style.backgroundColor='transparent'
	document.getElementById('shortBreack').style.backgroundColor='transparent'
}
	return (
		<>
		<div className='home_component'>
			<div className='row first_row'>
				<div className='row second_row'>
					<div className='col button_col'>
						<button id='pomodoro' onClick={pomoDoro}>Pomodoro</button>
						<button onClick={shortBreack} id='shortBreack'>Short Break</button>
						<button onClick={longBreack} id='longBreack'>Long Break</button>
					</div>
				</div>
					<div className='timer_component'>
						<Timer timeing={time}/>
					</div>
			</div>
			<div className='pomodoro_count text-center'>#1</div>
			<div className='taskName text-center'>Time to focus!</div>
		</div>
		</>
	);
}

export default Home