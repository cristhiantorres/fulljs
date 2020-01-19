import React from 'react';
import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      test: 42
    };
  }

  componentDidMount() {
    fetch('../testData.json').then(response => response.json()).then(json => {
      console.log(json);
    });
  }

  componentWillUnmount() {
    console.log('will Unmount');
  }
  
  render() {
    return (
      <div>
        <Header message="Naming Contents" />
        <div>
          {this.state.test}
        </div>
      </div>
    );
  }
}

export default App;
