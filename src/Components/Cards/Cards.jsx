import React from 'react';
import Card from './Card';
import { Grid } from '@material-ui/core';
import { confirmed, recovered, deaths } from '../../Assets';
import styles from './Cards.module.css';
import theme from '../../Theme/Theme';
import { ThemeProvider } from '@material-ui/core/styles';

const Cards = (props) => {
    const confirmedData = { ...props.data.confirmed, img: confirmed, type: "confirmed" };
    const recoveredData = { ...props.data.recovered, img: recovered, type: "recovered" };
    const deathsData = { ...props.data.deaths, img: deaths, type: "deaths" };
    const render = (        
            <Grid className={styles.grid}>
                <ThemeProvider theme={theme}>
                <Card data={confirmedData}></Card>
                </ThemeProvider>
                <Card data={recoveredData}></Card>
                <Card data={deathsData}></Card>
            </Grid>
        );
    return render;
}
export default Cards;