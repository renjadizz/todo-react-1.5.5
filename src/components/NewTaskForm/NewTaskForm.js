import { React, useState } from 'react';
import './NewTaskForm.css';

function NewTaskForm(props) {
  const [value, setValue] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChangeMin = (e) => {
    setMin(e.target.value);
  };
  const onChangeSec = (e) => {
    setSec(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
      if (min !== '' || sec !== '') {
        const timer = Number(min) * 60 + Number(sec);
        props.onCreateTask(value, timer);
        setValue('');
        setMin('');
        setSec('');
      }
    }
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input className="new-todo" value={value} placeholder="What needs to be done?" autoFocus onChange={onChange} />
      <input className="new-todo-form__timer" placeholder="Min" autoFocus value={min} onChange={onChangeMin} />
      <input className="new-todo-form__timer" placeholder="Sec" autoFocus value={sec} onChange={onChangeSec} />
      <input type="submit" hidden />
    </form>
  );
}
export default NewTaskForm;
