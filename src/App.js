import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';
class App extends React.Component {
  constructor() {
    super();

    this.myButtonRef = React.createRef();
  }

  setFocus = () => {
    this.myButtonRef.current.focus();
  }

  render() {
    return (
      <div>
        <button ref={this.myButtonRef}>My Button Ref for focus life</button>
        <Child  setFocus={this.setFocus} /> 
      </div>
    )
  }
}

export default App;
