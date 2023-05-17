import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import moment from 'moment';


function Form({ input, setInput, todos, setTodos, editTodos, setEditTodos }) {

    const updateTodos = (title, id, completed, time) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? { title, id, completed, time } : todo
        );
        setTodos(newTodo);
        setEditTodos('');
    };
    useEffect(() => {
        if(editTodos) {
            setInput(editTodos.title);
        } else {
            setInput('');
        };
    }, [setInput, editTodos]);

    useEffect(() => {
        document.title = `To do Lists (${todos.length} tasks)`;
    });

    const onInputChange = (event) => {
        setInput(event.target.value.trim());
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodos) {
            setTodos([...todos, {id: uuidv4(), title: input, completed:false, time:moment().format("MMM DD, HH:mm")}]);
            setInput("");            
        } else {
            editTodos.time = moment().format("MMM DD, HH:mm")
            updateTodos(input, editTodos.id, editTodos.completed, editTodos.time);
        }
    };
    const deleteAll = () => {
        window.location.reload(localStorage.clear());
    }
  return (
    <>
    <form onSubmit={onFormSubmit}>
        <input 
            type='text' 
            placeholder='Enter a todo...' 
            className='task-input' 
            value={input} 
            required
            onChange={onInputChange}
            autoFocus
        />
        <button type='submit' className='button-add'>
            {editTodos ? 'Update' : 'Add'}
        </button>
    </form>
    <button onClick={deleteAll} className="clear">Clear All</button>
    </>
  )
}

export default Form;