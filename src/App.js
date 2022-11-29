import { Component } from './core';
import './components/molecules/InputGroup/InputGroup';
import { todoList } from './services/todoList/TodoList';
import '../src/components/molecules/Task/Task';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            isLoading: false,
        }
    }

    getTasks() {
        todoList.getTasks().then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    tasks: data,
                }
            })
        })
    }

    saveTask = (evt) => {
        todoList.createTask({ ...evt.detail, isCompleted: false })
            .then(() => {
                this.getTasks();
            })
    }

    deleteTask = (id) => {
        todoList.deleteTask(id)
            .then(() => {
                this.getTasks();
            })
    }

    onClick = (evt) => {
        const target = evt.target;
        if (target.closest('.delete-action')) {
            const data = target.dataset;
            this.deleteTask(data.id);
        };      
    }

    componentDidMount() {
        this.getTasks();
        this.addEventListener('save-task', this.saveTask);
        this.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener('save-task', this.saveTask);
        this.removeEventListener('click', this.onClick);
    }

    render() {
        return `
        
        <div class='container mt-5'>
            <my-input-group></my-input-group>            
        </div>

        <ul class="list-group">
            ${this.state.tasks.map((item) => (
            `
                    <my-task title="${item.title}" id="${item.id}" iscompleted="${item.iscompleted}"></my-task>
                `
        )).join(' ')}
            
        </ul>
        `
    }
}

customElements.define('my-app', App);

{/* <ul class="list-group">
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
</ul> */}