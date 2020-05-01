import React from 'react';
import { fetchSummary } from '../../api';
import styles from '../../App.module.css';
import cx from 'classnames';
import {Cards,SummaryChart,Wrapper} from '../index';

class Summary extends React.Component {
    state = {
        summary: {}
    }
    render() {
        let bgClass = this.props.theme === "light" ? styles.light : styles.dark;
        return (
            <Wrapper className={cx(styles.container, bgClass)}>
                <Cards data={this.state.summary}></Cards>
                <SummaryChart curTheme={this.props.theme}></SummaryChart>
            </Wrapper>
        );
    }
    async componentDidMount() {
        var response = await fetchSummary();
        this.setState({ summary: response.data });
    }
}

export default Summary;