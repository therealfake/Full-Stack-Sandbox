import React, { Component } from 'react';

const ErrorComponent = () => <div>{props.ignore}</div>
export default class Count extends Component {
    constructor(props) {
        console.log('Constructor')
        super(props)

        this.state = {
            counter: 0,
            seed: 0
        }

        this.increcement = () => this.setState({counter: this.state.counter + 1})
        this.decrecement = () => this.setState({counter: this.state.counter - 1})

    }
    
    static getDerivedStateFromProps(props, state) {
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
    }

    componentDidMount() {
        console.log('Component Did Mount')
        console.log('-------------------')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProp && 
            this.props.ignoreProp !== nextProps.ignoreProp) {
                console.log('Should Component Update - DO NOT RENDER')
                console.log('-------------------')
                return false
            }
        console.log('Should Component Update - RENDER')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get Snapshot Before Update')
        return null
    }

    render() {
        console.log('Render')

        if (this.state.error) {
            return <div>We have encountered an error! {this.state.error}</div>
        }
        
        return (
            <div>
                <button onClick={this.increcement}>Increment</button>
                <button onClick={this.decrecement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
                <ErrorComponent/>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update')
        console.log('-------------------')
    }

    componentWillUnmount() {
        console.log('Component Will Unmount')
        console.log('----------------------')
    }

    componentDidCatch(error, info) {
        console.log('Component Did Catch')

        this.setState({error, info})
    }
}   