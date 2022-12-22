import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@material-ui/core";

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
        marginTop: "20px",
      }}
    >
      <List
        sx={{
          width: 270,
          height: 200,
          overflow: "auto",
          position: "relative",
          border: "3px solid ",
          borderRadius: "5px",
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
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    style={{ textTransform: "uppercase" }}
                  >
                    {index + 1}. {card}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SalesItemsList;
