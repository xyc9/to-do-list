import React, {Component} from "react";

class ToDoItem extends Component {

    render() {
        return <button className={`${this.props.done ? "done__todo" : ""} defaul__todo`} onClick={

            this.props.done === true ? this.props.handleChangeToFalse(this.props.id) :
                this.props.handleChangeToTrue(this.props.id)

        }>
            {this.props.title}

        </button>
    }
}

export default ToDoItem