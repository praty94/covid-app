import React from 'react';
import { fetchCountrySummary } from '../../api';
import styles from '../../App.module.css';
import cx from 'classnames';
import { Cards, Wrapper } from '../index';
import CountryChart from '../Charts/CountryChart';

class CountrySummary extends React.Component {
    state = {
        summary: {},
        country: null
    }
    render() {
        let bgClass = this.props.theme === "light" ? styles.light : styles.dark;
        return (
            <Wrapper className={cx(styles.container, bgClass)}>
                <Cards data={this.state.summary}></Cards>
                <CountryChart theme={this.props.theme} data={this.state.summary}></CountryChart>
            </Wrapper>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        let countryChanged = nextProps.country !== this.props.country || nextState.country !== this.state.country;
        let themeChanged = nextProps.theme !== this.props.theme;
        return countryChanged || themeChanged;
    }
    async componentDidUpdate() {
        if (this.state.country !== this.props.country) {
            await this.getCountrySummary();
        }
    }
    async componentDidMount() {
        await this.getCountrySummary();
    }
    getCountrySummary = async() => {
        if (this.props?.country?.match("^/covid-app/country/")) {
            let country = this.props.country;
            country = country.replace("/covid-app/country", "");
            let response = await fetchCountrySummary(country);            
            this.setState({ summary: response, country: this.props.country });
        }
    }
}

export default CountrySummary;