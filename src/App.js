import React, { useState, useEffect} from 'react'
import './App.css';
import List from './List';
import Task from './Task';
import { addTask, getTasks, completeTask, deleteTask} from './utlis.js';

function App() {
  const [taskDetail, setTaskDetail] = useState("");
  const [isError, setIsError] = useState(false);
  const [status, setStatus] = useState(0);//0 - all, 1  - active, 2 - completed
  const [tasks, setTasks] = useState([]);  

  const onAddHandler = () => {
    if (taskDetail === '') {
      setIsError(true);
    } else {
      const data = {
        "taskDetail": taskDetail,
        "status": status
      }
      addTask(data);
      getAllTask(status);
      setTaskDetail("");
    }
  }

  const onChangeHandler = (e) => {
    setTaskDetail(e.target.value);
    if (e.target.value.length > 0)
    {
      setIsError(false);
    }
  }

  const onClickStatus = (type) => {
    setStatus(type);
    getAllTask(type);
  }

  const getAllTask = (status) => {
    setTasks(getTasks(status));
  }

  useEffect(() => {
    getAllTask(status);
  }, [])
  
  const onCheckClick = async(id) => {
    await completeTask(id);
    await getAllTask(status);
  }  
  
  const onDeleteClick = async (id) => {
    await deleteTask(id);
    await getAllTask(status);
  }

  return (
    <div className="app">  
      <h1 className="app__title">#todo</h1>  
      <div className="app__tabs"> 
        <h1 onClick={() => onClickStatus(0)} className={status === 0 ? 'app__tabs__active': ''}>All</h1>
        <h1 onClick={() => onClickStatus(1)} className={status === 1 ? 'app__tabs__active': ''}>Active</h1>
        <h1 onClick={() => onClickStatus(2)} className={status === 2 ? 'app__tabs__active': ''}>Completed</h1>
      </div>
      <hr></hr>
      {status === 0 || status === 1 ? 
        <Task taskDetail={taskDetail}
          onAddHandler={onAddHandler}
          onChangeHandler={onChangeHandler}
          isError={isError}
        />
        : null
      }
      <List tasks={tasks} status={status} onCheckClick={onCheckClick} onDeleteClick={onDeleteClick}/>
      <div className="app__footer">Jyoti ADHIAKRI @ DevChallenges.io</div>
    </div>
  );
}

export default App;
