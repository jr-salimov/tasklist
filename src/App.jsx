import React from 'react';
import './index.css';

const emptyTask = [
  {
    title: 'default Title',
    description: 'default Description',
  },
];

export default function App() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [tasks, setTasks] = React.useState(emptyTask);
  const [isEditClicked, setIsEditClicked] = React.useState(false);
  const [editText, setEditText] = React.useState('Edit');
  const [checked, setChecked] = React.useState(false);
  const [checkImg, setCheckImg] = React.useState('/img/unchecked.svg');
  const [line, setLine] = React.useState('none');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const onAddTask = (title, description) => {
    setTasks([...tasks, { title, description }]);
  };
  const editCondition = () => {
    isEditClicked ? setEditText('Edit') : setEditText('Save');
    setIsEditClicked(!isEditClicked);
  };

  const isChecked = (checked) => {
    if (checked) {
      setCheckImg('/img/checked.svg');
      setLine('line-through');
    } else {
      setCheckImg('/img/unchecked.svg');
      setLine('none');
    }
    setChecked(!checked);
  };

  return (
    <div>
      <div className="addTaskWrapper">
        Title
        <input
          type="text"
          className="newTitle"
          onChange={handleChangeTitle}
          value={title}
          id="title"
        />
        Description
        <input
          type="text"
          className="newDescription"
          onChange={handleChangeDescription}
          value={description}
          id="description"
        />
        <button className="newTask" onClick={() => onAddTask(title, description)}>
          + Add Task
        </button>
      </div>
      <div className="listWrapper">
        {tasks.map((task, index) => (
          <div className="viewWrapper" key={index}>
            <div className="taskTitle" contentEditable={isEditClicked}>
              {task.title}
            </div>
            <div
              className="taskDescription"
              contentEditable={isEditClicked}
              style={{ textDecoration: `${line}` }}
            >
              {task.description}
            </div>
            <div className="buttons">
              <button
                className="deleteTask"
                onClick={() => setTasks(tasks.filter((t) => t !== task))}
              >
                Delete
              </button>
              <button className="editTask" onClick={editCondition}>
                {editText}
              </button>
              <img src={checkImg} alt="checkbox" className="checkbox" onClick={isChecked} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
