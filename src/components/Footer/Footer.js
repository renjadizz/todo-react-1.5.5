import TasksFilter from "../TasksFilter/TasksFilter";
import './Footer.css'

const Footer = ({filter, activeTasks, onFilterChange, onDeleteCompleted}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{activeTasks} items left</span>
            <TasksFilter filter={filter} onFilterChange={onFilterChange}/>
            <button className="clear-completed" onClick={() => onDeleteCompleted()}>Clear completed</button>
        </footer>
    );
}

export default Footer;