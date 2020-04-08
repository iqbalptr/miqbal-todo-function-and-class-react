import React, { useState} from 'react'
import Todo from './Todo'
import 'bootstrap/dist/css/bootstrap.min.css';

const FunctionBasedTodo = () => {
    const [todos, setTodos] = useState ([
        {text : "", isComplete: false},
    ])

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodos = [...todos, {text: value}]
        console.log("new todos", newTodos);
        setTodos(newTodos);
        setValue("");
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const editTodo = (index) => {
        const newTodos = [...todos];
        const editTodos = newTodos[index].text;
        const editedTodo = prompt(editTodos);
        newTodos.splice(index, 1, {text: editedTodo});
        setTodos(newTodos);
    }

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isComplete = !todos[index].isComplete;
        setTodos(newTodos)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <input type="submit"/>
            </form>

            {todos.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} editTodo={editTodo} completeTodo={completeTodo}/>
            ))}
        </div>
    )
}

export default FunctionBasedTodo
