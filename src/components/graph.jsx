import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Legend,
  ZoomAndPan,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
const TitleText1 = props => <Title.Text1 {...props} text={"Days"} />;

const titleStyle = { margin: 'auto' };
const TitleText = props => <Title.Text {...props} style={titleStyle} />;

const sData = [
    {
        day:1,
        Apple:50,
        Orange:40,
        PineApple:100
    },{
        day:2,
        Apple:60,
        Orange:20,
        PineApple:200
    },{
        day:3,
        Apple:20,
        Orange:400,
        PineApple:50
    },{
        day:4,
        Apple:100,
        Orange:10,
        PineApple:400
    }
];
export default function Chart1() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
 
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

          
          <LineSeries
            name="Pine Apple"
            valueField="PineApple"
            argumentField="day"
          />
           {checked && <ZoomAndPan
            interactionWithArguments={"both"}
            interactionWithValues={"both"}
          />}


          <Animation duration={0} />  
          
          <Title
            text="Price and Time graph"
            textComponent={TitleText}
          />
          
        </Chart>
        <FormControlLabel control={<Switch defaultChecked onChange={handleChange} />} label="Zoom" />
      </Paper>
    );
  }