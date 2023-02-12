import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';


const titleStyle = { margin: 'auto' };
const TitleText = props => <Title.Text {...props} style={titleStyle} />;

const sData = [
    {
        day:1,
        Apple:50,
        Orange:40
    },{
        day:2,
        Apple:60,
        Orange:20
    },{
        day:3,
        Apple:20,
        Orange:400
    },{
        day:4,
        Apple:100,
        Orange:10
    }
];

export default function Chart1() { 
    return (
      <Paper style={{padding:"7%"}}>
        <Chart
          data={sData}
        >

          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="Apple"
            valueField="Apple"
            argumentField="day"
          />

          <LineSeries
            name="Orange"
            valueField="Orange"
            argumentField="day"
          />

          <Title
            text="Price and Time graph"
            textComponent={TitleText}
          />
          
        </Chart>
      </Paper>
    );
  }