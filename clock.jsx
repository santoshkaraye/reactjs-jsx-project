import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {


    tick()
    {
        this.setState({date: new Date()});
    }

    tickAlter = ()=>{this.setState({date: new Date()})};

    componentDidMount()
    {
        setInterval(this.tickAlter,100);
    }

    constructor(props)
    {
        super(props);
        this.state = {date :new Date()};
    }

    render() {

        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>


        );

    }

}

render(<Hello/>, document.getElementById('app'));