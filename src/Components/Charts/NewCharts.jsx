import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Wrapper from '../HOC/Wrapper';
import styles from './Charts.module.css';
import { fetchDaily } from '../../api';
import useWindowDimensions from '../Helper/WindowDimensionHelper';
import ChartThemeHelper from '../../Theme/ChartThemeHelper';

const NewCharts = (props) => {
  const { height, width } = useWindowDimensions();
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      if(dailyData && dailyData.options && dailyData.series){
        const curState = {...dailyData};
        const options = ChartThemeHelper({ dates:curState.dates, theme: props.curTheme });
        curState.options = options;
        setDailyData({dates : curState.dates,options: curState.options, series: curState.series});
      }else{
        const data = await fetchDaily();
        const dates = data.map(({ date }) => date);
        const options = ChartThemeHelper({ dates, theme: props.curTheme });
  
        const series = [
          {
            name: "Confirmed",
            data: data.map(({ confirmed }) => confirmed)
          },
          {
            name: "Deaths",
            data: data.map(({ deaths }) => deaths)
          }
        ];
        setDailyData({ dates, options: options, series: series });
      }
      
    }

    fetchApi();
    // eslint-disable-next-line
  }, [props.curTheme]);//we GET chart data only once but re-render in case the theme changes
  
  let lineChart = (
    dailyData && dailyData.options && dailyData.series ? <Chart
      options={dailyData.options}
      series={dailyData.series}
      type="area"
      width={width < 768 ? width : 0.85 * width}
      height={0.6 * height}
    /> : ""
  );
  return (
    <Wrapper className={styles.container}>
      {lineChart}
    </Wrapper>

  );

}

export default NewCharts;