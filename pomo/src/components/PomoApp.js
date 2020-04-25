import React, { Component } from 'react';
import  ControlPomo from '../containers/ControlPomo';
import './PomoApp.css';

class PomoApp extends Component {
  render() {
    return (
      <div className="PomoApp">
        <ControlPomo />
      </div>
    );
  }
}

export default PomoApp;
