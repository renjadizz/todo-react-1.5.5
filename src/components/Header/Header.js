import NewTaskForm from "../NewTaskForm/NewTaskForm";
import './Header.css';

const Header = ({onCreateTask}) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm onCreateTask={onCreateTask}/>
        </header>
    );
}


export default Header;