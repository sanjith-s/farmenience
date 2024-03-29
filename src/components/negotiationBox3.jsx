import React from "react";
import WheatImg from "../wheatimg.jpg";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
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
        padding: "1.25rem",
        margin: "0.375rem 0rem",
      }}
    >
      <CardContent
        style={{
          lineHeight: "0rem",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.313rem",
        }}
      >
        <CardHeader style={{ padding: "0.313rem" }} title={date} subheader={text} />
        <CardMedia
          component="img"
          height="8.75rem"
          image={WheatImg}
          sx={{
            width: "11.875rem",
            border: "0.25rem solid #285430",
            borderRadius: "0.188rem",
          }}
        />
      </CardContent>

      <CardActions
        style={{
          width: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.313rem",
          columnGap: "1.25rem",
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
            padding: "0.313rem",
          }}
        >
          <Typography
            variant="h6"
            lineHeight={0.2}
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              marginBottom: "1.875rem",
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
                fontSize: "1.125rem",
              }}
            >
              product price
            </Typography>
            <Typography variant="h6">
              <CurrencyRupeeIcon style={{ fontSize: "1.063re" }} />
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
                fontSize: "1.125rem",
              }}
            >
              negotiated price
            </Typography>
            <Typography variant="h6">
              <CurrencyRupeeIcon style={{ fontSize: "1.063rem" }} />
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
                fontSize: "1.125rem",
              }}
            >
              less
            </Typography>
            <Typography variant="h6">
              <CurrencyRupeeIcon style={{ fontSize: "17px" }} />
              { props.actualPrice - props.userPrice}
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
                fontSize: "1.125rem",
              }}
            >
              total amount
            </Typography>
            <Typography variant="h6">
              <CurrencyRupeeIcon style={{ fontSize: "1.063rem" }} />
              {props.userPrice * props.userQuantity}
            </Typography>
          </Box>
        </CardContent>
        <Button
          variant="contained"
          color="success"
          style={{
            display: "flex",
            columnGap: "0.625rem",
            padding: "0.625rem",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
          }}
        >
          {props.acceptance == "Not responded" ? (
            <UnpublishedIcon/>
          ) : (
            <PublishedWithChangesIcon />
          )}

          {props.acceptance == "Not responded"
            ? "Not yet seen"
            : "Revised by Seller"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default NegotiationBox3;
