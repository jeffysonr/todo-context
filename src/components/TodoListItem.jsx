import React from 'react';

const TodoListItem = ({ todo }) => {
    return (
        <div>
            {todo.id} - {todo.title} - {todo.done ? "sim" : "não"}
        </div>
    );
}

export default TodoListItem;