import React, { useState } from 'react';

import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [taskItems, setTaskItems] = useState([
    { id: 1, state: 'completed', description: 'Completed task', created: 1519211809934, timer: 65 },
    { id: 2, state: 'active', description: 'Editing task', created: 1519211810362, timer: 44 },
    { id: 3, state: 'active', description: 'Active task', created: 1519211811670, timer: 99 },
  ]);

  const [filter, setFilter] = useState('all');

  const onCreateTask = (taskValue, taskTimer) => {
    const id = taskItems.length + 1;
    const state = 'active';
    const description = taskValue;
    const timer = taskTimer;
    const created = Date.now();
    setTaskItems([...taskItems, { id, state, description, created, timer }]);
  };
  const changeTaskContent = (id, newState) => {
    const taskItemsLeft = taskItems.map((item) => {
      if (item.id === id) {
        return newState(item);
      }
      return item;
    });
    setTaskItems(taskItemsLeft);
  };
  const onEditTaskItem = (id, text) => {
    changeTaskContent(Number(id), (item) => {
      const itemDesc = text;
      const itemState = 'active';
      return { ...item, state: itemState, description: itemDesc };
    });
  };
  const onEditStateTaskItem = (id) => {
    changeTaskContent(id, (item) => {
      const itemState = 'editing';
      return { ...item, state: itemState };
    });
  };
  const onChangeTaskState = (id) => {
    changeTaskContent(id, (item) => {
      const itemState = item.state === 'completed' ? (item.state = 'active') : (item.state = 'completed');
      return { ...item, state: itemState };
    });
  };
  const onDeleteTaskItem = (id) => {
    const taskItemsLeft = taskItems.filter((item) => item.id !== id);
    setTaskItems(taskItemsLeft);
  };
  const onDeleteCompleted = () => {
    const completed = filterTasks(taskItems, 'completed');
    completed.forEach((el) => {
      onDeleteTaskItem(el.id);
    });
  };
  const onFilterChange = (filter) => {
    setFilter(filter);
  };
  const filterTasks = (taskItems, filter) => {
    if (filter !== 'all') {
      return taskItems.filter((el) => el.state === filter);
    }
    return taskItems;
  };
  const countActive = (taskItems) => {
    let counter = 0;
    taskItems.forEach((el) => {
      if (el.state === 'active') counter++;
    });
    return counter;
  };

  const taskItemsFiltered = filterTasks(taskItems, filter);
  const activeTasks = countActive(taskItems);
  return (
    <section className="todoapp">
      <Header onCreateTask={onCreateTask} />
      <section className="main">
        <TaskList
          taskItems={taskItemsFiltered}
          onChangeTaskState={onChangeTaskState}
          onDeleteTaskItem={onDeleteTaskItem}
          onEditStateTaskItem={onEditStateTaskItem}
          onEditTaskItem={onEditTaskItem}
        />
        <Footer
          filter={filter}
          onFilterChange={onFilterChange}
          onDeleteCompleted={onDeleteCompleted}
          activeTasks={activeTasks}
        />
      </section>
    </section>
  );
}
export default App;
