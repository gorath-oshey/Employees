import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {onAdd} = this.props;
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h1>Add new employee</h1>
                <form className="add-form d-flex flex-column flex-md-row">
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="How it's His/Her name"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label mt-md-0 mt-3"
                        placeholder="Salary in $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />
                    <button 
                        type="submit" 
                        className="btn btn-outline-light mt-md-0 mt-3"
                        onClick={(e) => onAdd(name, salary, e.preventDefault())}>
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;