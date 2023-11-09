import React from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import './App.css';

export default class App extends React.Component {
    state = {
        taskItems: [
            {id: 1, state: 'completed', description: 'Completed task', created: 1519211809934},
            {id: 2, state: 'editing', description: 'Editing task', created: 1519211810362},
            {id: 3, state: 'active', description: 'Active task', created: 1519211811670}
        ],
        filter: 'all'
    }
    onCreateTask = (taskValue) => {
        const id = this.state.taskItems.length + 1;
        const state = 'active';
        const description = taskValue;
        const created = Date.now();
        this.setState(({taskItems}) => ({
            taskItems: [...taskItems, {id, state, description, created}]
        }));
    }
    onChangeTaskState = (id) => {
        this.setState(({taskItems}) => {
            const taskItemsLeft = taskItems.map((item) => {
                    if (item.id === id) {
                        const itemState = item.state === 'completed' ? item.state = '' : item.state = 'completed';
                        return {...item, state: itemState};
                    }
                    return item;
                }
            )
            return {taskItems: taskItemsLeft};
        })
    }
    onDeleteTaskItem = (id) => {
        this.setState(({taskItems}) => {
            const taskItemsLeft = taskItems.filter((item) => item.id !== id);
            return {taskItems: taskItemsLeft};
        })
    }
    onDeleteCompleted = () => {
        const completed = this.filterTasks(this.state.taskItems, 'completed');
        completed.forEach(el => {
            this.onDeleteTaskItem(el.id);
        })
    }
    onFilterChange = (filter) => {
        this.setState({filter});
    }
    filterTasks = (taskItems, filter) => {
        if (filter !== 'all') {
            return taskItems.filter((el) => el.state === filter)
        }
        return taskItems;
    }
    countActive = (taskItems) => {
        let counter = 0;
        taskItems.forEach((el) => {
            if (el.state !== 'completed') counter++;
        })
        return counter;
    }

    render() {
        const taskItems = this.filterTasks(this.state.taskItems, this.state.filter);
        const activeTasks = this.countActive(this.state.taskItems);
        return (
            <section className="todoapp">
                <Header onCreateTask={this.onCreateTask}/>
                <section className="main">
                    <TaskList taskItems={taskItems} onChangeTaskState={this.onChangeTaskState}
                              onDeleteTaskItem={this.onDeleteTaskItem}/>
                    <Footer filter={this.state.filter} onFilterChange={this.onFilterChange}
                            onDeleteCompleted={this.onDeleteCompleted} activeTasks={activeTasks}/>
                </section>
            </section>
        );
    }
}