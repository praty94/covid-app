import React from 'react';
import { Cards, Wrapper, AppBar,NewCharts } from './Components';
import styles from './App.module.css';
import { fetchSummary } from './api';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeHelper from './Theme/ThemeHelper';
import cx from 'classnames';

let light = "light",dark="dark";
class App extends React.Component {

  state = {
    summary: {},
    theme:light
  }
  render() {    
    let bgClass = this.state.theme === light ? styles.light : styles.dark;
    return (
      <ThemeProvider theme={ThemeHelper(this.state.theme)}>
        <AppBar curTheme={this.state.theme} themeToggleHandler={() => this.toggleTheme()}></AppBar>
        <Wrapper className={cx(styles.container,bgClass)}>
          <Cards data={this.state.summary}></Cards>
          <NewCharts curTheme={this.state.theme}></NewCharts>         
        </Wrapper>
      </ThemeProvider>
    );
  }
  async componentDidMount() {
    let response = await fetchSummary();
    this.setState({ summary: response.data });    
  }
  
  toggleTheme = () =>{
    this.state.theme === light ? this.setState({theme:dark}) : this.setState({theme:light});
  }
}

export default App;
