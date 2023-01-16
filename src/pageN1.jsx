import './css/pageN1.css'
import QueryBox from './components/queryBox';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const PageN1 = () =>{
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        let token=Cookies.get('token') ;
        Axios.get('http://localhost:5000/getquery',{headers: { tokenstring: token } }).
        then((response)=>{
          setData(response.data.message);
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
        })
      },[data]);
    return (
        <>
        <Card id="title-background">
            <Typography variant="h5"  id="n1-title">
                Queries
            </Typography>
        </Card>
        <Box id="flex-cards">
            {
                data.map((val)=>{
                    return(
                        <div>
                            <QueryBox ID={val._id} Date={val.updatedAt} Status={val.status} Subject={val.subject} Desc={val.description
} oldQuery={val.oldQuery} />
                        </div>
                    )
                })
            }
        </Box>
        <div>
      <button onClick={()=>{
        navigate('../N9')
      }}>
        Profile Page
      </button>
    </div>
        </>
    )
}
export default PageN1;