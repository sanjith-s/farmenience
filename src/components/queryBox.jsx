import '../css/pageN1.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const QueryBox = (props) =>{
    return (
        <>
            <Card id="card-n1">
                <table id="query-table" >
                    <tr>
                        <td id="left-column"><Typography>Query ID <span id="semi-colon">:</span></Typography></td>
                        <td id="right-column"><Typography>{props.ID}</Typography></td>
                    </tr>
                    <tr>
                        <td id="left-column"><Typography>Query Subject <span id="semi-colon"> :</span></Typography></td>
                        <td id="right-column"><Typography>{props.Subject}</Typography></td>
                    </tr>
                    <tr>
                        <td id="left-column">
                            <Typography>Date of Query <span id="semi-colon"> :</span></Typography>
                        </td>
                        <td id="right-column"><Typography>{props.Date}</Typography></td>
                    </tr>
                    <tr>
                        <td id="left-column"><Typography>Status <span id="semi-colon">:</span></Typography></td>
                        <td id="right-column"><Typography>{props.Status}</Typography></td>
                    </tr>
                </table>
                <div id="buttons-n1">
                    <Button variant="contained" color="success" id="button-n1">
                        Display
                    </Button>
                    <Button variant="contained" color="success" id="button-n1">
                        Edit
                    </Button>
                    <Button variant="contained" color="success" id="button-n1">
                        Delete
                    </Button>
                </div>
            </Card>
        </>       
    )
}

export default QueryBox;