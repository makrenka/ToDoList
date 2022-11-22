import { Component } from "../../../core";
import { todoList } from "../../../services/todoList/TodoList";
import '../../atoms/Button/Button';
import '../../atoms/Input/Input';

export class InputGroup extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            isLoading: false,
            error: '',
        }
    }

    onSave() {
        if (this.state.inputValue) {
            this.setState((state) => {
                return {
                    ...state,
                    isLoading: true,
                }
            })
            todoList.createTask({
                title: this.state.inputValue,
                isCompleted: false,
            }).then(() => {
                this.setState((state) => {
                    return {
                        ...state,
                        inputValue: '',
                    }
                })
            }).catch(() => {
                throw new Error('Server is not available');
            }).finally(() => {
                this.setState((state) => {
                    return {
                        ...state,
                        isLoading: false,
                    }
                })
            });
        }
    }

    onInput(evt) {
        this.setState((state) => {
            return {
                ...state,
                inputValue: evt.detail.value,
            }
        })
    }

    componentDidMount() {
        this.addEventListener('save-task', this.onSave);
        this.addEventListener('custom-input', this.onInput);
    }

    render() {
        return `
            <div class="input-group mb-3">
                <my-input value="${this.state.inputValue}" type="text" placeholder="Add a new task"></my-input>
                <my-button eventtype="save-task" content="Save" classname="btn btn-outline-primary"></my-button>
            </div>
            <div class="spinner-border ${this.state.isLoading ? "open" : "closed"}" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        `
    }
}

customElements.define('my-input-group', InputGroup);