import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import ChartData from '../ChartData.json';

export default class Chart extends Component {
  render() {
    const {name,displayChart} = this.props;
    return (
      <div>
        <div style={{display:displayChart}}>
          <Bar
            data={ChartData[name]}
            height={450}
            options={{
              maintainAspectRatio: false,
              title:{
                display:true,
                text:"Color Chart of "+name,
                fontSize:25,
              },
              legend:{
                  display:true,
                  position:'bottom',
              }
            }}
          />
        </div>
      </div>
    )
  }
}
