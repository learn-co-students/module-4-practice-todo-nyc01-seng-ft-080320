import React from 'react';
import {Task} from '../Components/Task';
function TasksContainer(props) {

	const renderTasks = (category) => {
        if(category === 'All'){
           return props.tasks.map((task, index) => {
                return <Task key={index} task={task} />;
            })
        } 
        else {
        const filtered = props.tasks.filter(task => {
            return task.category === category
        })

		return filtered.map((task, index) => {
			return <Task key={index} task={task} />;
        });
    }
    };
	return (
		<div className="tasks">
			<h5>Tasks</h5>
			<div>{renderTasks(props.category)}</div>
		</div>
	);
}

export default TasksContainer;
