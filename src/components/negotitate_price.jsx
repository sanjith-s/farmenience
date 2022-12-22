import { useState } from 'react';
import '../css/pageM16.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Negotiate = (props) =>{
    const [price,setPrice]=useState(0);
    const displayPrice = ()=>{
        alert('The price is '+price)
    }
    return (
        <>
        <Card id="main-com">
            <div id="left">
                <table id="left-content">
                    <tr>
                        <td id="left-table">
                            <Typography color="initial" id="left-table">
                                Product Name
                            </Typography>    
                        </td>
                        <td id="right-table">
                            <Typography color="initial" id="right-table">
                                : {props.Name}  
                            </Typography> 
                        </td>
                    </tr>
                    <tr>
                        <td id="left-table">
                            <Typography color="initial" id="left-table">
                                Quantity
                            </Typography> 
                        </td>
                        <td id="right-table">
                            <Typography color="initial" id="right-table">
                                : {props.Quantity}  
                            </Typography> 
                        </td>
                    </tr>
                    <tr>
                        <td id="left-table">
                            <Typography color="initial" id="left-table">
                                Specific Type
                            </Typography> 
                        </td>
                        <td id="right-table">
                            <Typography color="initial" id="right-table">
                                : {props.Type}  
                            </Typography> 
                        </td>
                    </tr>
                    <tr>
                        <td id="left-table">     
                            <Typography color="initial" id="left-table">
                                Buyer name
                            </Typography> 
                        </td>
                        <td id="right-table">
                            <Typography color="initial" id="right-table">
                                : {props.Buyer}  
                            </Typography> 
                        </td>
                    </tr>
                    <tr>
                        <td id="left-table"> 
                            <Typography color="initial" id="left-table">
                                Buyer Address
                            </Typography>
                        </td>
                        <td id="right-table">
                            <Typography color="initial" id="right-table">
                                : {props.Address}  
                            </Typography> 
                        </td>
                    </tr>
                </table>
            </div>
            <div id="right">
                <table id="left-content">
                        <tr>
                            <td id="left-table">                              
                                <Typography color="initial" id="left-table">
                                    Pricings
                                </Typography>     
                            </td>
                            <td id="right-table">
                                <Typography color="initial" id="right-table">
                                    :  {new Intl.NumberFormat('en-IN').format(props.Price)} INR 
                                </Typography> 
                            </td>
                        </tr>
                </table>
                <Card id="price-entry">
                    <Typography variant='h5' color="initial" id="price-entry-title">
                        Enter the price
                    </Typography> 
                    <table id="price-entry-box">
                        <tr>
                            <td id="left-table">
                                <TextField  label="Enter Price" variant="standard" type="number"
                                    onChange={(e)=>{setPrice(e.target.value)}}>
                                </TextField>
                            </td>
                            <td id="right-table-inr">
                                <Typography color="initial"  id="inr-style">
                                    INR
                                </Typography> 
                            </td>
                        </tr>
                    </table>
                    <center>
                        <Button variant="contained" id="price-submit" onClick={()=>{displayPrice();}}>
                            Submit
                        </Button>
                    </center>
                </Card>
            </div>
        </Card>
        </>
    )
}

export default Negotiate;