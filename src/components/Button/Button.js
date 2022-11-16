import { Component } from "../../core";

export class Button extends Component {

    componentDidMount() {
        this.addEventListener('click', () => {
            this.dispatch(this.props.eventtype);
        }) 
    }

    static get observedAttributes() {
        return ['content', 'classname', 'eventtype'];
    }

    render() {
        const { content, classname } = this.props;
        return `
            <button type="button" class="btn ${classname}">${content}</button>
        `
    }
}

customElements.define('my-button', Button);