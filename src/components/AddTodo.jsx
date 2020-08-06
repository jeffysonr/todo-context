import React, {useState, useContext} from 'react';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
    const {saveTodo} = useContext(TodoContext);
    const [todo, setTodo] = useState({title: ''});

    const handleFormSubmit = e => {
        e.preventDefault();
        saveTodo(todo);
        setTodo({title: ''});
    }

    const handleInputChange = e => {
        console.log(todo);
        setTodo({...todo, title: e.target.value});
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text" 
                name="title" 
                id="title"
                placeholder="nova tarefa..."
                value={todo.title}
                onChange={handleInputChange}
            />
            <button>Add</button>
        </form>
    );
}

export default AddTodo;