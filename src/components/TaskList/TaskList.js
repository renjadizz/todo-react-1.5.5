import React from 'react';
import PropTypes from 'prop-types';
import Task from "../Task/Task";
import './TaskList.css';


export default class TaskList extends React.Component {

    render() {
        const {taskItems, onChangeTaskState, onDeleteTaskItem} = this.props;
        const taskItem = taskItems.map((item) => {
            const {id, state, ...itemText} = item;
            return (
                <li key={id} className={state}>
                    <div className="view">
                        <input className="toggle" type="checkbox"
                               checked={state === 'completed' ? true : false}
                               onChange={() => onChangeTaskState(id)}/>
                        <label><Task itemText={itemText}/></label>
                        <button className="icon icon-edit"></button>
                        <button className="icon icon-destroy" onClick={() => onDeleteTaskItem(id)}></button>
                    </div>
                    {state === 'editing' ? <input type="text" className="edit" defaultValue="Editing task"/> : null}
                </li>
            );
        });
        return (
            <ul className="todo-list">
                {taskItem}
            </ul>
        );
    }
}
TaskList.defaultProps = {
    onChangeTaskState: () => {
    },
    onDeleteTaskItem: () => {
    },
}
TaskList.propTypes = {
    taskItems: PropTypes.arrayOf(PropTypes.object),
    onChangeTaskState: PropTypes.func,
    onDeleteTaskItem: PropTypes.func
};