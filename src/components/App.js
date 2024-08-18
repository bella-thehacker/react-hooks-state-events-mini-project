import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onSelectCategory={handleCategorySelect} 
        selectedCategory={selectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(category => category !== "All")} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList 
        tasks={filteredTasks} 
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
