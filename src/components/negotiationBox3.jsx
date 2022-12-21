import React, { useS } from "react";
import WheatImg from "../WheatImg.png";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
  Divider,
  Button,
} from "@mui/material";

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
          width: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px",
          columnGap: "20px",
        }}
      >
        <CardContent
          lineHeight={0.5}
          style={{
            width: "50%",
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
              alignItems: "center",
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
              alignItems: "center",
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
              alignItems: "center",
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
          <Divider
            sx={{
              width: "80%",
              alignSelf: "center",
            }}
            flexItem
          />
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
              total amount
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
            : "Revised by Seller-Respond Now"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default NegotiationBox3;
