import React from 'react';
import { Cards, Charts, CountryPicker, Wrapper, AppBar } from './Components';
import styles from './App.module.css';
import { fetchSummary } from './api';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/Theme';

class App extends React.Component {
  state = {
    summary: {}
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppBar></AppBar>
        <Wrapper className={styles.container}>
          <Cards data={this.state.summary}></Cards>
          <Charts></Charts>
          <CountryPicker></CountryPicker>
        </Wrapper>
      </ThemeProvider>
    );
  }
  async componentDidMount() {
    var response = await fetchSummary();
    this.setState({ summary: response.data });
  }
}

export default App;
