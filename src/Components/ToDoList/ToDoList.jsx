import React, {Component} from "react";
import "./ToDoList.css"
import ToDoItem from "./ToDoItem/ToDoItem";

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [
                {
                    title: "Smth very important",
                    id: 1,
                    done: false,
                },
                {
                    title: "Another very important thing",
                    id: 2,
                    done: false,
                },
                {
                    title: "Ordinary thing",
                    id: 3,
                    done: true,
                }
            ],
            title: ""
        }

        this.addNewTask = this.addNewTask.bind(this);
        this.handleChangeToTrue = this.handleChangeToTrue.bind(this);
        this.handleChangeToFalse = this.handleChangeToFalse.bind(this);
        this.changeInputValue = this.changeInputValue.bind(this);
    }


    addNewTask() {
        if (this.state.title !== '') {
            this.setState({
                todoList: [...this.state.todoList, {
                    title: this.state.title, id: this.state.todoList.length + 1,
                    done: false,
                }],
                title: ""
            });
        } else {
            alert('Нельзя добавить пустую задачу')
        }
    }

    changeInputValue(e) {
        this.setState({
            title: e.target.value
        })
    }
    handleChangeToTrue = (id)=>{
        let i = id-1
        this.setState(state=>{
            let todosItemsNew = state.todoList[i];
            todosItemsNew.done = true;
            return state
        })
        console.log(this.state)
    }
    handleChangeToFalse = (id)=>{
        let i = id-1
        this.setState(state=>{
            let todosItemsNew = state.todoList[i];
            todosItemsNew.done = false;
            return state
        })
        console.log(this.state)
    }



    render() {
        let todoItems = this.state.todoList.map(items=>{
            return(
                <ToDoItem
                key={items.id}
                title={items.title}
                done={items.done}
                handleChangeToTrue={()=>{this.handleChangeToTrue(items.id)}}
                handleChangeToFalse={()=>{this.handleChangeToFalse(items.id)}}
                />
            )
        })

        return <>
            <div className="ToDoList">
                {todoItems}
                <div className="todo__add-side">
                    <input type="text" className="todo__add-input" value={this.state.title} onChange={this.changeInputValue}/>
                    <button className="todo__add-button" onClick={this.addNewTask}>send</button>
                </div>

            </div>
        </>
    }
}

export default ToDoList;