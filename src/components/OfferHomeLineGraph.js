import React from 'react';
import {Line} from 'react-chartjs-2';
import { Card, StyledBody, StyledAction } from "baseui/card";
import { useStyletron } from "baseui";
import {Heading, HeadingLevel} from 'baseui/heading';



const data = {
  labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Past 7 Days',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(38,148,77,1)',
      borderColor: 'rgba(38,148,77,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(38,148,77,0.1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38,148,77,1)',
      pointHoverBorderColor: 'rgba(38,148,77,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [710, 730, 600, 550, 450, 370, 400]
    },
    {
      label: 'Weekly Average (Past 3 Months)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(38,148,77,1)',
      borderColor: 'rgba(38,148,77,1)',
      borderCapStyle: 'butt',
      borderDash: [5],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(38,148,77,0.1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38,148,77,1)',
      pointHoverBorderColor: 'rgba(38,148,77,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [850, 830, 780, 690, 730, 700, 680]
    }
  ]
};

const divStyle = {
  width: '800px',
  // height: '450px'
};

class OfferHomeLineGraph extends React.Component {
   
    render() 
    {

    return (
      <div>
        <HeadingLevel>
          <Heading styleLevel={4}>Weekly Sales Report</Heading>
        </HeadingLevel>
        <div style={divStyle}> 

        <Card > 
        <HeadingLevel>
          <Heading styleLevel={6}>Sales are down 34% this week</Heading>
        </HeadingLevel>
        <HeadingLevel>
          <Heading styleLevel={6}>This week: $4,655</Heading>
        </HeadingLevel>
          <Line data={data} options={{
          layout: {
            style: {
            }

          }
        }}
        />
        
        </Card>
        </div>
        sah
      </div>
    )
    }
}

export default OfferHomeLineGraph;