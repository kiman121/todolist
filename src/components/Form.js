import { useState } from 'react';

export default function Form({ onAddTodo }) {
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newTodo = { id: Date.now(), description, isCompleted: false };

    onAddTodo(newTodo);
    setDescription('');
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <div className='todolist__new-task'>
        <div className='new-task__input-group'>
          <label htmlFor='new-task'>Add a task</label>
          <input
            type='text'
            id='new-task'
            placeholder='e.g. read React.js'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type='submit'>
          <svg viewBox='0 0 10 10'>
            <path d='M6 4h4v2H6v4H4V6H0V4h4V0h2z' fillRule='nonzero' />
          </svg>
          <span>Add task</span>
        </button>
      </div>
    </form>
  );
}
