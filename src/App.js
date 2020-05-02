import React from 'react';
import { AppBar } from './Components';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeHelper from './Theme/ThemeHelper';
import { Route, Switch } from 'react-router-dom';
import { Summary, CountrySummary } from './Components/index';
import { withRouter } from 'react-router';
import {countryValidator,getCountry} from './Components/Helper/CountryHelper';

let light = "light", dark = "dark";
class App extends React.Component {

  state = {
    theme: light,
    country: countryValidator(this.props.location.pathname)
  }
  render() {
    return (
      <ThemeProvider theme={ThemeHelper(this.state.theme)}>
        <AppBar country={this.getCountryForSearch()} curTheme={this.state.theme} themeToggleHandler={() => this.toggleTheme()} routerHelper={(value) => this.routerHelper(value)}></AppBar>
        <Switch>
          <Route path="/covid-app/country/*"><CountrySummary theme={this.state.theme} country={this.state.country}></CountrySummary></Route>
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
      this.setState({ country: `/covid-app/country/${value.name}` });

      const { history } = this.props;
      if (value)
        history.push(`/covid-app/country/${value.name}`);
      else
        history.push('/covid-app');
    }
  }
  getCountryForSearch = () => {
    return {name : getCountry(this.state.country)};
  }
}

export default withRouter(App);
