import ListItem from './ListItem';

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <>
      <ul className='todolist__tasks'>
        {todos.length === 0
          ? 'Your todo list is empty. Hurray! 🎉'
          : todos.map((todo) => (
              <ListItem
                todo={todo}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
                key={todo.id}
              />
            ))}
      </ul>
      {/* <div class='todolist__empty-state'>
        Fetching your tasks... Please wait a bit... ⏰.
      </div> */}
    </>
  );
}
