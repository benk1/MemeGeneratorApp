import React from 'react';
const TodoItems = ({ todos, onDelete }) => {
  const TodoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className='collection-item' key={todo.id}>
          <ul>
            <li>{todo.content}</li>
            <button
              onClick={() => onDelete(todo.id)}
              className='waves-effect waves-light btn-small red accent-5 right'
            >
              Delete
            </button>
          </ul>
        </div>
      );
    })
  ) : (
    <h3 className="center red-text darken-5">There are no Todos,Please add Todos!!</h3>
  );

  return <div className='collection'>{TodoList}</div>;
};

export default TodoItems;
