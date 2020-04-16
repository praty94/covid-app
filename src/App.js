import React from 'react';
import { Cards, Charts, CountryPicker, Wrapper } from './Components';
import styles from './App.module.css';
import { fetchData } from './api';
class App extends React.Component {
  state={
    summary:{}
  }
  render() {
    return (
      <Wrapper className={styles.container}>
        <Cards></Cards>
        <Charts></Charts>
        <CountryPicker></CountryPicker>
      </Wrapper>
    );
  }
  async componentDidMount() {
    var response = await fetchData();
    this.setState({summary:response});
    console.log(response);
  }
}

export default App;
