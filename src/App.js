import { Component } from './core';
import './components/molecules/InputGroup/InputGroup';
import { todoList } from './services/todoList/TodoList';

export class App extends Component {


    render() {
        return `
        
        <div class='container mt-5'>
            <my-input-group></my-input-group>            
        </div>
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