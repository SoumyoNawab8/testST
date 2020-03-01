import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubApp from './SubApp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={numState: false};
  }


  render() {
    return (
      <div className="App">
        <button onClick={()=>{this.setState({numState:!this.state.numState})}}>Toggle</button>
      {this.state.numState?<SubApp />:null}
      </div>
    );
  }
}

export default App;
