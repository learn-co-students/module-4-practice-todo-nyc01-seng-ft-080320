import React from 'react';

const Task = (props) => {
	return (
		<div className="task">
			<div className="label">{props.task.category}</div>
			<div className="text">{props.task.text}</div>
		</div>
	);
};

export { Task };
