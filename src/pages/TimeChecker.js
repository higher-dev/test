import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
	setStartTime,
	setEndTime,
	clearData
} from "../store/timeReducer";
import TimeInputPanel from "../components/TimeInputPanel";

const TimeChecker = () => {
	const dispatch = useDispatch();

	// get startTime and endTime from store
	const startTime = useSelector(state => state.timepicker.startTime);
	const endTime = useSelector(state => state.timepicker.endTime);

	// set time to check in this page as state
	const [time, setTime] = useState(0);

	/**
	 *  check time is in range of startTime and endTime and alert messages
	 * 
	 */
	function checkTime()
	{
		let check = Number(time), start = Number(startTime), end = Number(endTime);

		if(start > end) {
			end += 24;
			check += 24;
		}
		if(start == end) alert("Time is in range!");
		else if(start <= check && check <= end) alert("Time is in range!");
		else alert("Time is out of range!")

		dispatch(clearData());
		setTime(0);
	}

  	return (
		<div className="main-panel">
			<h1>Test Project From Mobile Factory</h1>
			<p>Please enter the start and end times below:</p>
			
			{/* TimeInputPanel is a component to input specific time */}
			<TimeInputPanel 
				label="Start Time"
				id="start_time"
				value={startTime}
				onChange={ (e)=>dispatch(setStartTime(e)) }
			/>
			
			<TimeInputPanel 
				label="End Time"
				id="end_time"
				value={endTime}
				onChange={ (e)=>dispatch(setEndTime(e)) }
			/>

			<p>Please enter the start and end times below:</p>

			<TimeInputPanel 
				label="Check Time"
				id="check_time"
				value={time}
				onChange={setTime}
			/>

			<div className="button-panel">
				{/* Reset button clears startTime and EndTime which is saved in store */}
				<button 
					className="time-reset" 
					onClick={()=>dispatch(clearData())}
				>
					Reset Range
				</button>

				<button 
					className="time-check" 
					onClick={checkTime}
				>
					Check
				</button>
			</div>
		
		</div>
  );
};

export default TimeChecker;