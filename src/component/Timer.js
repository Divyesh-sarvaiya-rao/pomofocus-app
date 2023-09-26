import React from "react";

function Timer(props) {

	return (
    <>
			<h1 className='text-center stopwatch-time'>{props.dispSecondsAsMins(props.timer)}</h1>
    </>
	)
}

export default Timer