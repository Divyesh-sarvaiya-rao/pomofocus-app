import React from 'react'

function Task() {
const taskAdd = () =>{
	console.log('Function clicked');
}
	return (
		<div className='task_component'>
			<div className='task_header'>
				<span>Tasks</span>
				<div className='dots_menu'>
				||
				</div>
			</div>
			<div className='task_button' onClick={taskAdd}>
				<strong>+</strong> Add Task
			</div>
			<div className='task_add_box'>
				<input type='text' placeHolder='What are you working on?' />
				<span>Est Pomodoros</span>
				<input type='number' className='number_input' min='0'step='1' value='1' />
				<div className='btn_div'>
					<button className='cancel_btn'>Cancel</button>
					<button className='save_btn'>Save</button>
				</div>
			</div>
		</div>
	)
}

export default Task
