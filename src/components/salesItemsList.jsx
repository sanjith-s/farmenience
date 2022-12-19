import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function SalesItemsList(props) {
  const onClickHandler = (event) => {
    console.log(event.target.outerText);
  };

  const cardList = props.cards;

  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        maxWidth: 270,
        bgcolor: "#1FE57A",
        borderRadius: "5px",
      }}
    >
      <List
        sx={{
          width: 270,
          height: 200,
          overflow: "auto",
          position: "relative",
        }}
      >
        {cardList.map((card, index) => (
          <ListItem
            key={index}
            value={card}
            onClick={onClickHandler}
            component="div"
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={` ${index + 1}. ${card}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SalesItemsList;
