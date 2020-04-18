import React from 'react';
import Card from './Card';
import Wrapper from '../HOC/Wrapper';
import { Grid } from '@material-ui/core';
import { confirmed, recovered, deaths } from '../../Assets';

const Cards = (props) => {
    const confirmedData = { ...props.data.confirmed, img: confirmed, type: "confirmed" };
    const recoveredData = { ...props.data.recovered, img: recovered, type: "recovered" };
    const deathsData = { ...props.data.deaths, img: deaths, type: "deaths" };
    const render = (
        <Wrapper>
            <Grid container spacing={3} justify="center">
                <Card data={confirmedData}></Card>
                <Card data={recoveredData}></Card>
                <Card data={deathsData}></Card>
            </Grid>
        </Wrapper>);
    return render;
}
export default Cards;