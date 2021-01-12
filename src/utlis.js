export const addTask = (data) => {
	const tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
	data['id'] = Math.random().toString(16).slice(2);
	tasks.push(data);	
	localStorage.setItem('Tasks', JSON.stringify(tasks));			
};

export const getTasks = (status) => {
	const tasks = JSON.parse(localStorage.getItem('Tasks')) || [];	
	if (tasks.length <= 0)
	{
		return tasks;
	} else {
		if (status === 2)
		{
			return tasks.filter(x => x.status === status );
		} 
		return tasks.filter(x => x.status <= status );		
	}
}

export const completeTask = (id) => {
	const tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
	
	let task = tasks.find(x => x.id === id);
	if (task.status <= 1) {
		task.status = 2;
	} else task.status = 1;

	const idx = tasks.findIndex(x => x.id === id);
	tasks[idx] = task;
	localStorage.setItem('Tasks', JSON.stringify(tasks));
}

export const deleteTask = (id) => {
	const tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
	const newTasks = [];	
	if (id) {
		tasks.forEach(task => {
			if (task.id !== id)
			{
				newTasks.push(task);	
			}
		})
	} else {
		tasks.forEach(task => {
			if (task.status !== 2)
			{
				newTasks.push(task);	
			}
		})
	}
	localStorage.setItem('Tasks', JSON.stringify(newTasks));
}
