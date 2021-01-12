import React from 'react'
import './css/Task.css';

function Task({ taskDetail, onAddHandler, onChangeHandler, isError}) {
	return (
		<div className="task">
			<div className="task__input__container">
				<input type="text" placeholder="add detail"
				className="task__input"
				value={taskDetail}
				onChange={(e) => { onChangeHandler(e); }}
				/>
				{
					isError ? <span className="input__error">Enter the task detail.</span>
						: null
				}			
			</div>			
			<button className="button__add" onClick={() => onAddHandler()}>Add</button>
		</div>
	)
}

export default Task;
