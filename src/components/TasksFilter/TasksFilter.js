import './TasksFilter.css'


const TasksFilter = ({onFilterChange, filter}) => {
    const liWithBtns = [
        {state: 'all', label: 'All'},
        {state: 'active', label: 'Active'},
        {state: 'completed', label: 'Completed'},
    ]

    const buttons = liWithBtns.map((el) => {
        const activeClass = el.state === filter ? "selected" : null;
        return (
            <li key={el.state}>
                <button className={activeClass} onClick={() => onFilterChange(el.state)}>{el.label}</button>
            </li>
        );
    });
    return (
        <ul className="filters">
            {buttons}
        </ul>
    );
}

export default TasksFilter;