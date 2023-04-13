import React, { useEffect, useState } from "react";
import '../css/pageN11.css';
import Swal from "sweetalert2";
import QueryBox from "../components/queryBox";
import QueryList from "../components/queryList";
import { Box, Typography, TextField, Button, Stack,Pagination} from "@mui/material";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const content = [
  {
    queryID: 100,
    queryName: "What is the right crop to grow this season ?",
    date: "14 Jan 2023"
  },
  {
    queryID: 101,
    queryName: "What is the irrigation pattern to follow this season ?",
    date: "11 Jan 2023"
  },
  {
    queryID: 102,
    queryName: "How to grow crops without expensive chemical fertilizers ?",
    date: "13 Jan 2023"
  },
  {
    queryID: 103,
    queryName: "Anyone willing to provide warehouse facilities for the produce in the farm ?",
    date: "14 Jan 2023"
  },
  {
    queryID: 104,
    queryName: "How to apply for crop insurance ?",
    date: "12 Jan 2023"
  },
];

function PageN11() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get('http://localhost:5000/getqueries', { headers: { tokenstring: token } }).
      then((response) => {
        setData(response.data.message);
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          setOpen1(true);
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          setOpen2(true);
          navigate('../login')
        }
      })
  }, []);
return(
/*   <>
  <Box className="query-list">
      <h2 className="query-list__heading">You have {data.length} queries</h2>
      {
          data.map((val) => {
              return (
                  <div>
                      <QueryBox ID={val._id} Date={val.updatedAt} Status={val.status} Subject={val.subject} Desc={val.description
                      } oldQuery={val.oldQuery} fullData={val} />
                  </div>
              )
          })
      }
  </Box>
      
    </> */
     
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "1.25rem 0rem",
        marginBottom: "2.5rem",
      }}
    >
      <Box sx={{ padding: "1.25rem 0rem" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "600", textTransform: "uppercase" }}
          backgroundColor = "yellow"
          borderRadius={2}
        >
          you have {data.length} queries to view{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "fit-content",
          border: "0.31rem solid",
          borderRadius: "0.188rem",
          backgroundColor: "#bdfbbf",
        }}
      >
        <Box
          sx={{
            padding: "2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "3.125rem",
            rowGap: "3.125rem",
          }}
        >
          {data.map((req, index) => {
            return (
              <QueryList
                key={index + 1}
                queryID={req._id}
                queryName={req.subject}
                queryDesc={req.description}
                date={req.updatedAt}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
export default PageN11;