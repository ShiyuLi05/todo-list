import './style/index.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import TodoLists from './components/TodoLists';


function App() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodos, setEditTodos] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <main>
      <div className='container'>
        
          <div>
            <Header />
          </div>
          <div className='center'>
            <Form 
              input = {input}
              setInput = {setInput}
              todos = {todos}
              setTodos = {setTodos}
              editTodos = {editTodos}
              setEditTodos = {setEditTodos}
            />
          </div>
          <div>
            <TodoLists todos={todos} setTodos={setTodos} setEditTodos={setEditTodos}/>
          </div>
        
      </div>
    </main>    
  );
}

export default App;
