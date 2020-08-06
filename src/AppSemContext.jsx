import React, {useState} from 'react';

const AppSemContext = () => {
    const [todos, setTodos] = useState([
        {id:1, title:'Ir ao supermercado', done:false},
        {id:2, title:'Ir ao farmacia', done:false},
        {id:3, title:'Ir ao bar', done:false}
    ]);

    const [todo, setTodo] = useState();

    const handleFormSubmit = e => {
        e.preventDefault();

        setTodos([
            ...todos,
            todo
        ])
    }

    const handleInputChange = e => {
        setTodo({
            ...todo,
            id: todos.length + 1,
            title: e.target.value,
            done: false
        })
    }

    return (
        <div>
            {todos.map(i => (
                <div key={i.id} >{i.title}</div>
            ))}
            <br />
            <hr />
            <br />
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    name="todo" 
                    id="title"
                    placeholder="nova tarefa..."
                    onChange={handleInputChange}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default AppSemContext;