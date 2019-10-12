import React from 'react';
import { render } from 'react-dom';

class Clock extends React.Component {


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
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>


        );

    }

}

function APP()
{
    return(
        <div>
        <Clock/>
    <Clock/>
        <Clock/> </div>)

}

render(<Clock/>, document.getElementById('app'));