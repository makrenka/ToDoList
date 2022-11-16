export class Component extends HTMLElement {
    constructor() {
        super();
        this.props = {};
        this.state = {};
    }

    setState(callback) {
        this.state = callback(this.state);
        this.innerHTML = this.render();
    }

    connectedCallback() {
        this.innerHTML = this.render();
        this.componentDidMount();
    }

    disconnectedCallback() {
        this.componentWillUnmount();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.componentWillUpdate(name, oldValue, newValue);
        this.getAttributeNames().forEach((name) => {
            this.props[name] = this.getAttribute(name);
        })
    }

    dispatch(type, props) {
        this.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: props }));
    }

    render() {};
    componentDidMount() {};
    componentWillUnmount() {};
    componentWillUpdate() {};
}