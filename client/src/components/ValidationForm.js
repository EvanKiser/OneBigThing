import React from "react";

export default class ValidationForm extends React.Component {
    state = {
        taskTitle: "",
        completed: false,
        date: new Date(),
        user: ""
    };

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        name="user"
                        placeholder="user"
                        value={this.state.user}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}