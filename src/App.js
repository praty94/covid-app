import React from 'react';
import { AppBar } from './Components';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeHelper from './Theme/ThemeHelper';
import { Route, Switch } from 'react-router-dom';
import { Summary, CountrySummary } from './Components/index';
import { withRouter } from 'react-router';

let light = "light", dark = "dark";
class App extends React.Component {

  state = {
    theme: light,
    country: null
  }
  render() {
    return (
      <ThemeProvider theme={ThemeHelper(this.state.theme)}>
        <AppBar curTheme={this.state.theme} themeToggleHandler={() => this.toggleTheme()} routerHelper={(value) => this.routerHelper(value)}></AppBar>
        <Switch>
          <Route path="/country/*"><CountrySummary theme={this.state.theme} country={this.state.country ? this.state.country : this.props.location.pathname}></CountrySummary></Route>
          <Route><Summary theme={this.state.theme}></Summary></Route>
        </Switch>
      </ThemeProvider>
    );
  }

  toggleTheme = () => {
    this.state.theme === light ? this.setState({ theme: dark }) : this.setState({ theme: light });
  }
  routerHelper = (value) => {
    if (value) {
      this.setState({ country: `/country/${value.name}` });

      const { history } = this.props;
      if (value)
        history.push(`/country/${value.name}`);
      else
        history.push('/');
    }
  }
}

export default withRouter(App);
