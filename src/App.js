import { Component } from './core';
import './components/Button/Button';
import { todoList } from './services/todoList/TodoList';

export class App extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            value: '',
        }
    }

    registerEvents() {
        this.addEventListener('change', (evt) => {
            if (evt.target.closest('.form-control')) {
                this.setState((state) => {
                    return {
                        ...state,
                        value: evt.target.value,
                    }
                })
            }
        });

        window.addEventListener("save-task", () => {            
            this.setState((state) => ({ ...state, isLoading: true }));
            todoList.createTask({ title: this.state.value }).finally(() => {
                this.setState((state) => ({ ...state, isLoading: false }))
            })
        })
    }

    

    render() {
        return `
        
        <div class='container mt-5'>
            <div class="input-group mb-3">
                <input value='${this.state.value}' type="text" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2">
                <my-button eventtype="save-task" content="Save" classname="btn btn-outline-primary"></my-button>
            </div>
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="form-check d-flex justify-content-between align-items-center">
                    <div>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                        </div>
                        <div class='d-flex'>
                        <my-button content="Delete" classname="btn btn-danger btn-sm"></my-button>
                        <my-button content="Update" classname="btn btn-primary btn-sm"></my-button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        `
    }
}

customElements.define('my-app', App);