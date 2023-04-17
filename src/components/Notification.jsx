import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function Notification(props) {
  return (
    <Card
        style={{
            padding: ".9375rem",
        width: "28.125rem",
        borderRadius: ".3125rem",
        border: ".125rem solid #000000",
        }}
    >
       <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: ".625rem .3125rem",
          borderTop: ".125rem solid",
          columnGap: "1.25rem",
        }}
      > 
      <Typography
          style={{
            width: "",
            padding: ".3125rem .3125rem .3125rem .625rem",
            backgroundColor: "#16e575",
            borderRadius: ".1875rem",
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