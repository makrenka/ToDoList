import { Component } from "../../../core";

export class Task extends Component {
    constructor () {
        super();
        this.state = {
            isEditting: false,
        }
    }

    static get observedAttributes() {
        return ['title', 'id', 'iscompleted']
    }

    onClick(evt) {
        const target = evt.target;
        if(target.closest('.edit-action')) {
            this.setState((state) => {
                return {
                    ...state,
                    isEditting: true,
                }
            })
        }
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick);
    }

    render() {
        return `
        <li class="list-group-item">
            <div class="form-check d-flex justify-content-between align-items-center">
                <div>
                    <input class="form-check-input" type="checkbox" ${this.props.iscompleted ? 'checked' : ''} id="${this.props.id}">
                        <label class="form-check-label" for="${this.props.id}">
                            ${this.props.title}
                        </label>
                </div>
                <div class='d-flex'>
                    <button data-id="${this.props.id}" class="btn btn-danger btn-sm m-2 delete-action">Delete</button>
                    <button data-id="${this.props.id}" class="btn btn-primary btn-sm m-2 edit-action">Edit</button>
                </div>
            </div>
        </li>
        `
    }
}

customElements.define('my-task', Task);