import React from 'react';
import { Cards, Charts, CountryPicker, Wrapper } from './Components';
import styles from './App.module.css';
import { fetchSummary } from './api';
class App extends React.Component {
  state={
    summary:{}
  }
  render() {
    return (
      <Wrapper className={styles.container}>
        <Cards data={this.state.summary}></Cards>
        <Charts></Charts>
        <CountryPicker></CountryPicker>        
      </Wrapper>
    );
  }
  async componentDidMount() {
    var response = await fetchSummary();
    this.setState({summary:response.data});
    console.log(response);
  }
}

export default App;
