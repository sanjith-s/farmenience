import React , {useState} from "react";

import { FormControl,FormControlLabel,RadioGroup,Radio,Typography, FormLabel } from "@mui/material";


function SalesItemsList(props) {
  
  const valueChangeHandler = (event) => {
    props.onSelectedValue(event.target.value);
  };

  const cardList = props.itemsList;

  return (
    <>
    <FormControl>
    <FormLabel style={{display:"flex",justifyContent:"center"}}>
      <Typography style={{textTransform:"uppercase",fontSize:"1.75rem",fontWeight:"600",textAligh:"center"}}>items list</Typography>
    </FormLabel>
      <RadioGroup
        onChange={valueChangeHandler}
      >

        {cardList.map((item) =>{
          return <FormControlLabel value={item} control={<Radio />} label={<Typography textTransform="uppercase">{item}</Typography>} />
        })}
      </RadioGroup>
    </FormControl>
    
    </>
    
  );
}

export default SalesItemsList;
