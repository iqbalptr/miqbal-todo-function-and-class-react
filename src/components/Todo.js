import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo =({todo, index, removeTodo, editTodo, completeTodo}) => {
    return (
        <div style={{color: todo.isComplete ? "green" : ""}}>
            <h3>{todo.text}
            <br/>
            <Button onClick={() => removeTodo(index)}>Remove</Button>
            <Button onClick={() => editTodo(index)} className="mx-2">Edit</Button>
            <Button onClick={() => completeTodo(index)}>Complete</Button>
            </h3>
        </div>
    )
}
export default Todo;
