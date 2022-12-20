import React, { useS } from "react";
import WheatImg from "../WheatImg.png";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import VerifiedIcon from "@mui/icons-material/Verified";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import {
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
  InputLabel,
  Button,
  // IconButton,
} from "@mui/material";
import { CardGiftcard } from "@mui/icons-material";

function NegotiationBox3(props) {
  let text = "sent to seller " + props.seller;
  const date = props.purchaseDate.toLocaleDateString();

  return (
    <Card
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        padding: "20px",
        margin: "8px 0px",
      }}
    >
      <CardContent
        style={{
          lineHeight: "0px",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <CardHeader style={{ padding: "5px" }} title={date} subheader={text} />
        <CardMedia
          component="img"
          height="120"
          image="../wheatimg.jpg"
          sx={{ width: "150px" }}
        />
      </CardContent>

      <CardActions
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <CardContent
          lineHeight={0.5}
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <Typography
            variant="h6"
            lineHeight={0.2}
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              marginBottom: "30px",
              justifySelf: "flex-start",
            }}
          >
            {props.iName}
          </Typography>

          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              list price
            </Typography>
            <Typography variant="h6">
              <CurrencyRupeeIcon style={{ fontSize: "17px" }} />
              {props.discountPrice}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              your price
            </Typography>
            <Typography variant="h6">
              <CurrencyRupeeIcon style={{ fontSize: "17px" }} />
              {props.userPrice}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              less
            </Typography>
            <Typography variant="h6">
              <CurrencyRupeeIcon style={{ fontSize: "17px" }} />
              {props.userPrice - props.discountPrice}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              total
            </Typography>
            <Typography variant="h6">
              <CurrencyRupeeIcon style={{ fontSize: "17px" }} />
              {props.userPrice * props.userQuantity}
            </Typography>
          </Box>
        </CardContent>
        <Button variant="contained" color="success">
          {props.acceptance == "no" ? (
            <VerifiedIcon />
          ) : (
            <PublishedWithChangesIcon />
          )}

          {props.acceptance == "no"
            ? "Accepted by Seller-Contact Now"
            : "Revised by Seller-Repond Now"}
        </Button>
      </CardActions>

      {/* <CardContent
        style={{
          lineHeight: "0px",
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "600" }}
        >
          {props.iName}
        </Typography>
        <Typography
          variant="overline"
          lineHeight={2.5}
          sx={{ fontSize: "15px", paddingLeft: "5px" }}
        >
          {props.quantity}kg
        </Typography>
        <Box>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{ fontSize: "18px", fontWeight: "600" }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
            {props.discountPrice}
          </Typography>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{
              textDecoration: "line-through",
              fontSize: "13px",
              paddingLeft: "10px",
            }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "13px" }} />
            {props.actualPrice}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            color="green"
            lineHeight={2.5}
            sx={{ fontWeight: "600" }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "17px" }} />
            {props.discountAmount} off
          </Typography>
        </Box>
      </CardContent>

      <CardActions
        style={{
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          <IconButton
            style={{ backgroundColor: "#cccccc" }}
            color="success"
            size="large"
            onClick={increment}
          >
            <AddIcon />
          </IconButton>
          <Box sx={{ padding: "10px" }}>
            <Typography variant="h6">{counter}</Typography>
          </Box>
          <IconButton
            style={{ backgroundColor: "#cccccc" }}
            color="success"
            size="large"
            onClick={decrement}
          >
            <HorizontalRuleIcon />
          </IconButton>
        </Box>
      </CardActions> */}
    </Card>

    // <div className="negot_card ">
    //   <div className="date_img">
    //     <label>{date}</label>
    //     <img className="product_img" src={WheatImg} alt=" "></img>
    //     <h4 className="product_img_caption">Sent to {props.seller} seller</h4>
    //   </div>
    //   <div className="price_content">
    //     <div className="end_price_content">
    //       <div className="iname">{props.iName}</div>
    //       <div className="price_list">
    //         <ul className="price_list_label">
    //           <li>list price :</li>
    //           <li>your price :</li>
    //           <li>{props.discountPrice < props.userPrice ? "more" : "less"}</li>
    //         </ul>
    //         <ul>
    //           <li>inr {props.discountPrice}</li>
    //           <li>inr {props.userPrice}</li>
    //           <li className="less_price">
    //             inr {props.userPrice - props.discountPrice}
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <button className="accept_btn">
    //           {props.acceptance == "no"
    //             ? "Accepted by Seller-Contact Now"
    //             : "Revised by Seller-Repond Now"}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default NegotiationBox3;
