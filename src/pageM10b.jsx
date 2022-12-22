import {AiOutlineSearch, AiOutlineCamera,AiFillStar} from 'react-icons/ai';
import {BsMic,BsFilter} from 'react-icons/bs';
import {BiSortDown} from 'react-icons/bi'
import './css/pageM10b.css'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PageM10b = () =>{
    const data=[
        {   
            market:"RAJA",
            distance:"ANGEL STORE",
            city:<div><AiFillStar/><AiFillStar/><AiFillStar/></div>
        },
        {   
            market:"RAHUL ",
            distance:"SS STORE",
            city:<div><AiFillStar/><AiFillStar/></div>
        },
        {   
            market:"RAKESH ",
            distance:"KP STORE",
            city:<div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
        },
        {   
            market:"MAHESH ",
            distance:"MANI STORE",
            city:<div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
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
                                NAME OF THE SELLER:{val.market}
                                <br></br>
                                NAME OF THE STORE:{val.distance}
                            </Typography>
                            <Typography id="text-in-card">
                                {val.city}
                            </Typography>
                            <div>
                                <Button variant="contained" id="button-style-market">
                                    <Link id="link-style" to="/M10c">
                                        View
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
export default PageM10b;