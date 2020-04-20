import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';
import Wrapper from '../HOC/Wrapper';

const Charts = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDaily());
        }
        fetchApi();
    }, []);

    var lineChart = (
        dailyData && dailyData.length > 0 ?
            <Line
                data={{
        labels: dailyData.map(({date})=>date),
        datasets: [
          {
            label: 'Confirmed',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(59, 136, 246,0.4)',
            borderColor: 'rgba(59, 136, 246,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(59, 136, 246,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(59, 136, 246,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dailyData.map(({confirmed})=>confirmed)
          },
          {
            label: 'Deaths',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(227, 18, 29,0.4)',
            borderColor: 'rgba(227, 18, 29,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(227, 18, 29,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(227, 18, 29,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dailyData.map(({deaths})=>deaths)
          }
        ]
      }}
            ></Line> : ""
    );
    return (
    <Wrapper className={styles.container}>
        {lineChart}
    </Wrapper>);
}

export default Charts;