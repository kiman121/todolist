export default function ListItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className='task'>
      <input type='checkbox' value={todo.isCompleted} id={todo.id} />
      <label htmlFor={todo.id}>
        <svg viewBox='0 0 20 15'>
          <path d='M0 8l2-2 5 5L18 0l2 2L7 15z' fillRule='nonzero' />
        </svg>
      </label>
      <span className='task__name'>{todo.description}</span>
      <button
        type='button'
        className='task__delete-button'
        onClick={() => onDeleteTodo(todo.id)}
      >
        <svg viewBox='0 0 20 20'>
          <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
        </svg>
      </button>
    </li>
  );
}

// function Spinner() {
//   return <img class='task__spinner' src='images/spinner.gif' alt='' />;
// }
