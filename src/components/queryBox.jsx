import '../css/pageN1.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Cookies from 'js-cookie';
import Axios from "axios";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const QueryBox = (props) =>{
    const [open, setOpen] = useState(false);
    const navigate=useNavigate();
    const [subject,setSubject]=useState(props.Subject);
    const [desc,setDesc]=useState(props.Desc);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const editQuery = () => {
        let token=Cookies.get('token') ;
    Axios.put('http://localhost:5000/editquery',{subject:subject,
    description: desc,
    id:props.ID
  },{headers: { tokenstring: token } }).
    then((response)=>{
      console.log(response);
      if(response.data.message==='Edited Successfully')
      {
        alert('Edited Successfully');
        navigate('../N1');
      }
    })
    .catch((res)=>{
      if(res.response.data.message==='Error in connection')
      {
        alert('Please Check Network');
      }
      else if(res.response.data.message==='Token not found'||res.response.data.message==='Invalid token'||res.response.data.message==='Session Logged Out , Please Login Again')
      {
        alert('Login error');
        navigate('../login')
      }
      else
      {
        alert(res.response.data.message);
      }
    })
        setOpen(false);
    }
    const DeleteQuery = () => {
        let token=Cookies.get('token') ;
        let id=props.ID;
        Axios.delete(`http://localhost:5000/deletequery/${id}`,{headers: { tokenstring: token } }).
    then((response)=>{
      console.log(response);
      if(response.data.message==='Deleted Successfully')
      {
        alert('Deleted Successfully');
      }
    })
    .catch((res)=>{
      if(res.response.data.message==='Error in connection')
      {
        alert('Please Check Network');
      }
      else if(res.response.data.message==='Token not found'||res.response.data.message==='Invalid token'||res.response.data.message==='Session Logged Out , Please Login Again')
      {
        alert(res.response.data.message);
        navigate('../login')
      }
    })
    }
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
                    <Button variant="contained" color="success" id="button-n1" onClick={
                        ()=>{
                            navigate('../N2',{state:{id:props.ID,oldQuery:props.oldQuery}})
                        }
                    }>
                        Display
                    </Button>
                    <Button onClick={handleClickOpen} variant="contained" color="success" id="button-n1">
                        Edit
                    </Button>
                    <Button onClick={DeleteQuery} variant="contained" color="success" id="button-n1">
                        Delete
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit Query</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Edit Query
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Subject"
                            type="Subject"
                            fullWidth
                            defaultValue={props.Subject}
                            variant="standard"
                            onChange={(e)=>{setSubject(e.target.value)}}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Description"
                            type="Description"
                            fullWidth
                            defaultValue={props.Desc}
                            variant="standard"
                            onChange={(e)=>{setDesc(e.target.value)}}
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={editQuery}>Edit</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Card>
        </>       
    )
}

export default QueryBox;