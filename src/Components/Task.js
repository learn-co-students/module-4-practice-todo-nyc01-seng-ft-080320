import React from 'react';

const Task = (props) => {
    const localClickHandler = () => {
        props.deleteClickHandler(props.task)
    }
	return (
		<div className="task">
			<div className="label">{props.task.category}</div>
			<div className="text">{props.task.text}</div>
            <button onClick={localClickHandler}className="delete">X</button>
		</div>
	);
};

export { Task };
