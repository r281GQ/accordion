import React from 'react';
import axios from 'axios'

import Container from './container';
import Main from './main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    axios.get('http://design.propcom.co.uk/buildtest/accordion-data.json')
      .then(response => this.setState({ items: response.data.blocks }))
      .catch(error => console.log(error));
  }

  render() {
    return <Container><Main items={this.state.items} /></Container>;
  }
}

export default App;
