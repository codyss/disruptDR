import React from 'react';
import styles from '../../styles/main.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

function Header(props) {
  return (
    <div className={styles.chart}>
      <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
          data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15}
          ]}/>
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
}

export default Header
