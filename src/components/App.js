import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      contests: []
    };
  }

  componentDidMount() {
    fetch('../testData.json')
      .then(response => response.json())
      .then(json => {
        this.setState({ contests: json.contests });
      });
  }
  
  render() {
    return (
      <div className="container">
        <Header message="Naming Contents" />        
        {this.state.contests.map(contest => 
          <ContestPreview {...contest} key={contest.id} />
        )}
      </div>
    );
  }
}

export default App;
