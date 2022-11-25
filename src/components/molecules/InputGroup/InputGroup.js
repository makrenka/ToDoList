import { Component } from "../../../core";

export class InputGroup extends Component {
    
    onSubmit = (evt) => {
        evt.preventDefault();
        const task = {};
        const data = new FormData(evt.target);
        data.forEach((value, key) => {
            task[key] = value;
        })
        this.dispatch('save-task', task);
    }

    componentDidMount() {
        this.addEventListener('submit', this.onSubmit);
    }

    componentWillUnmount() {
        this.removeEventListener('submit', this.onSubmit);
    }

    render() {
        return `
            <form class="input-group mb-3">
                <input 
                    name="title"
                    type="text" 
                    class="form-control" 
                    placeholder="Add a new task" 
                >
                <button type="submit" class="btn btn-outline-primary">Save</button>
            </form>
            <div class="spinner-border ${this.state.isLoading ? "open" : "closed"}" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        `
    }
}

customElements.define('my-input-group', InputGroup);