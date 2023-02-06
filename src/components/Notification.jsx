import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function Notification(props) {
  return (
    <Card
        style={{
            padding: "15px",
        width: "450px",
        borderRadius: "5px",
        border: "2px solid #000000",
        }}
    >
       <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: "10px 5px",
          borderTop: "2px solid",
          columnGap: "20px",
        }}
      > 
      <Typography
          style={{
            width: "",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#16e575",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >{props.message}
        </Typography>
        </CardContent>
        <CardContent sx={{
          display: "flex",
          justifyContent: "flex-end"
        }}>
          <Button>
            CLEAR
          </Button>
        </CardContent>  
    </Card>
  )
}

export default Notification