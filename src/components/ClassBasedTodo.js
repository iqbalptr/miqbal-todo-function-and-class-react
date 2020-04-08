import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

class ClassBasedTodo extends Component {
    constructor(){
        super()
        this.state = {
            todoList : [],
            todoInput : "",
            isComplete : false,
        }
    }

    clickChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clickAdd = () => {
        this.setState({
            todoList: [...this.state.todoList, this.state.todoInput],
            todoInput: ""
        })
    }
    
    clickDelete = (index) => {
        const newtodoInput = [...this.state.todoList];
        newtodoInput.splice(index, 1);
        this.setState({todoList :newtodoInput})
    }

    clickEdit = (index) => {
        const newtodoInput = [...this.state.todoList];
        const editInput = newtodoInput[index];
        const editedInput = prompt(editInput);
        newtodoInput.splice(index, 1, editedInput);
        this.setState({todoList :newtodoInput})
    }

    clickComplete = (index) => {
        const newtodoInput = [...this.state.todoList];
        newtodoInput[index] = !this.state.todoList[index].isComplete;
        
        this.setState({todoList :newtodoInput})
    }

    render () {
        return (
            <div classsName="petrus">
                <input type="text" name="todoInput" value={this.state.todoInput} onChange={this.clickChange} className="border border-primary" />
                <Button onClick={this.clickAdd} variant="outline-primary" className="ml-3">Submit</Button>

                {this.state.todoList.map((item, index) =>(
                    <h3 key={index} index={index} style={{color: this.state.isComplete ? "green" : ""}} className="text-secondary mb-5">{item}
                    <br/>
                    <Button variant="outline-danger" onClick={() => this.clickDelete(index)} className="mt-2">Delete</Button>
                    <Button onClick={() => this.clickEdit(index)} className="mx-2 mt-2">Edit</Button>
                    <Button onClick={() => this.clickComplete(index)} className="mt-2">Complete</Button></h3>
                ))}
            </div>
        )
    }
}
export default ClassBasedTodo;
