import React from "react"; 
import Task from "./Task";  

function TaskList({ tasks, setTasks }) {

  function handleDeleteTask(taskText) {
    setTasks(tasks.filter(task => task.text !== taskText));
  }

  return (
    <div>
      {tasks.map((task) => (
        <Task 
          key={task.text} 
          text={task.text} 
          category={task.category} 
          onDelete={() => handleDeleteTask(task.text)} 
        />
      ))}
    </div>
  );
}

export default TaskList;
