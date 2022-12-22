import {AiOutlineSearch, AiOutlineCamera} from 'react-icons/ai';
import {BsMic,BsFilter} from 'react-icons/bs';
import {BiSortDown} from 'react-icons/bi'
import './css/pageM10a.css'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PageM10a = () =>{
    const data=[
        {   
            market:"SABJI MANDI",
            distance:"2208.3 km from your location",
            city:"DELHI"
        },
        {   
            market:"KOYEMBEDU MARKET",
            distance:"5 km from your location",
            city:"CHENNAI"
        },
        {   
            market:"PATEL VEGETABLE MARKET",
            distance:"626 km from your location",
            city:"HYDERABAD"
        },
        {   
            market:"RMC MARKET",
            distance:"345 km from your location",
            city:"BANGALORE"
        }
    ]
    return (
        <>
            <Card id="search-bar">
                <div>
                    <table id="table-text-search">
                        <tr>
                            <td id="table-text-search">
                                <AiOutlineSearch id="icon-style2" size={30}/>
                            </td>
                            <td id="table-text-search">
                                <input type="text" placeholder='Search for market' id="text-input"></input>
                            </td>
                        </tr>
                    </table>
                </div> 
                <div id="right-icons">
                    <BsMic id="icon-style1" size={30}/>
                    <AiOutlineCamera id="icon-style1" size={30}/>
                </div>
            </Card>
            <Card id="sort-filter-card">
                <Typography>
                    <BiSortDown size={30}/>
                    SORT
                </Typography>
                <Typography>
                    <BsFilter size={30}/>
                    FILTER
                </Typography>
            </Card>
            
                {data.map((val)=>{
                    return(
                        <Card id="card-display">
                            <Typography id="text-in-card">
                                {val.market}
                                <br></br>
                                {val.distance}
                            </Typography>
                            <Typography id="text-in-card">
                                {val.city}
                            </Typography>
                            <div>
                                <Button variant="contained"  id="button-style-market">
                                    <Link id="link-style" to="/M10b">
                                        View Market
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    )
                })
                }
            
        </>
    )
}
export default PageM10a;