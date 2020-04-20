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
      let data = await fetchDaily();      
      let options = ChartThemeHelper({data:data,theme:props.curTheme});
      let series = [
        {
          name: "Confirmed",
          data: data.map(({ confirmed }) => confirmed)
        },
        {
          name: "Deaths",
          data: data.map(({ deaths }) => deaths)
        }
      ];
      setDailyData({ options: options, series: series });

    }
    
    fetchApi();
  }, [props.curTheme]);

  let lineChart = (
    dailyData && dailyData.options && dailyData.series ? <Chart
      options={dailyData.options}
      series={dailyData.series}
      type="area"
      width={width<768 ? width : 0.85 * width}
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