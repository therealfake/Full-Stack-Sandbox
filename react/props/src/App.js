import React, { Component } from 'react';
import MyComponent from './MyComponent';
import MyFunctionalComponent from './MyFunctionalComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    
    return (
      <div>
        <div>
        <MyFunctionalComponent title="Hello World" />
        </div>
        <div>
          <MyComponent title="React" onButtonClicked={this.onClickBtn}/> 
        </div>
      </div>
      
    )
  }
}
export default App;
