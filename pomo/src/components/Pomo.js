import React, { Component } from 'react';

class Pomo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currTime : props.time
        }

        this.intervalHandle;
        this.startPomo = this.startPomo.bind(this);
        this.pausePomo = this.pausePomo.bind(this);
    }

    startPomo() {
        this.props.togglePomo(0);
        this.intervalHandle = setInterval(() => {
            console.log("tick");
            this.setState({
                currTime: this.state.currTime - 1
            });
        }, 1000);
    }

    pausePomo() {
        clearInterval(this.intervalHandle);
        this.props.togglePomo(this.state.currTime);
    }

    render() {
        let clickHandler = this.props.status === 'paused' ? this.startPomo : this.pausePomo;
        return (
            <div>
            <h1>POMO</h1>
            <h1>Created by {this.props.name}</h1>
            <div className="time-box">
                <h2>{this.state.currTime}</h2>
            </div>
            <button className="reset-time">Reset</button>
            <button onClick={ clickHandler } className="toggle-time">Play/Pause</button>
            <input type="number" name="pomo-length" value="25" min="0" max="100" />
            <input type="number" name="short-break-length" value="5" min="0" />
            <input type="number" name="long-break-length" value="15" min="0" />
            </div>
        );
    }
}

export default Pomo;