import React from 'react';

const TodoLists = ({todos, setTodos, setEditTodos}) => {

  const hanleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const hanleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const hanleEdit = ({id, time}) => {
    const findTodo = todos.find((todo) => todo.id === id && todo.time === time);
    setEditTodos(findTodo);
  }

  return (
    <div className='grid'>
      {todos.map((todo) => (
        <section className={`list-items ${todo.completed ? 'complete' : ''}`} key={todo.id}>
          <h3 className={`list ${todo.completed ? 'completeText' : ''}`} onChange={(event) => event.preventDefault()} >
            {todo.title}
          </h3>
        <div className='options'>
          <div className='date'>
            <p>{todo.time}</p>
          </div>
          <div className='icons'>
            <button className='task-button button-complete' onClick={() => hanleComplete(todo)}>
              <i className="ph-fill ph-check-circle" />
            </button>
            <button className='task-button button-edit' onClick={() => hanleEdit(todo)}>
              <i className="ph-fill ph-pencil"  />
            </button>
            <button className='task-button button-delete' onClick={() => hanleDelete(todo)}>
              <i className="ph-fill ph-trash" />
            </button>
          </div>
        </div>
      </section>
      )).reverse()}
    </div>
  )

}

export default TodoLists;
