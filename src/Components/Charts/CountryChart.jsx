import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Wrapper from '../HOC/Wrapper';
import styles from './Charts.module.css';
import useWindowDimensions from '../Helper/WindowDimensionHelper';

const CountryChart = (props) => {
  const { height, width } = useWindowDimensions();
  const [countryData, setCountryData] = useState({});
  
  useEffect(() => {
    if(props.data && props.data.confirmed){
    const {confirmed,recovered,deaths} = {...props.data};
    console.log("theme " + props.theme);
    setCountryData({          
        series: [{
          name:"Covid-19 Cases",
          data: [confirmed.value,recovered.value,deaths.value]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
            toolbar:{
            tools: {
              download: false
            }}
          },
          colors: ['#368bf6','#00af80','#eb5569'],
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: [
              ['Confirmed'],
              ['Recovered'],
              ['Deaths']
            ],
            labels: {
              style: {
                colors: ['#368bf6','#00af80','#eb5569'],
                fontSize: '12px'
              }
            }
          },
          yaxis:{
            laels:{
              style:{
                colors:props.theme ===  "light" ? '#FFFFFF' : '#373d3f'
              }
            }
          }
        }
      });
    }
  }, [props.curTheme,props.data,props.theme]);
  let barChart = (
    countryData && countryData.options && countryData.series ? <Chart
      options={countryData.options}
      series={countryData.series}
      type="bar"
      width={width < 768 ? width : 0.85 * width}
      height={0.6 * height}
    /> : ""
  );
 return (
    <Wrapper className={styles.container}>
      {barChart}
    </Wrapper>

  );

}

export default CountryChart;