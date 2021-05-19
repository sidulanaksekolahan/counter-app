import React, { Component } from 'react';

class Counter extends Component {

    /**
     * Called immediately after updating occurs
     */
    componentDidUpdate(prevProps, prevState) {
        // Get new data from the server
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            console.log('Berbeda')
            console.log(this.props.counter.value)
        }
    }

    /**
     * Called immediately before a component is destroyed
     */
    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    render() { 
        console.log('Counter - Rendered');

        return (
            <div className="row">
                <div className="col-1">
                    <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                </div>

                <div className="col">
                    {/* add button */}
                    <button 
                        onClick={ () => {
                        this.props.onIncrement(this.props.counter)
                    } } className="btn btn-secondary btn-sm">+</button>

                    {/* increment button */}
                    <button 
                        onClick={ () => {
                        this.props.onDecrement(this.props.counter)
                    } } className="btn btn-secondary btn-sm m-2"
                        disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button>

                    {/* Delete button */}
                    <button 
                        onClick={() => this.props.onDelete(this.props.counter.id)} 
                        className="btn btn-danger btn-sm">Delete</button>
                </div>

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;