import React, { Component } from 'react';

class Pomo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.name);
        return (
            <div>
            <h1>POMO</h1>
            <h1>Created by {this.props.name}</h1>
            <div className="time-box">
                <h2>25:00</h2>
            </div>
            <button className="reset-time">Reset</button>
            <button onClick={ this.props.togglePomo } className="toggle-time">Play/Pause</button>
            <input type="number" name="pomo-length" value="25" min="0" max="100" />
            <input type="number" name="short-break-length" value="5" min="0" />
            <input type="number" name="long-break-length" value="15" min="0" />
            </div>
        );
    }
}

export default Pomo;