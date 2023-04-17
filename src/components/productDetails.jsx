import React from "react";
import { CardContent, Typography } from "@mui/material";
import { Stack, Box } from "@mui/material";

const itemsName = [
  "order date",
  "delivery date",
  "client name",
  "payment mode",
  "transaction id",
  "remarks",
];

function ProductDetails(props) {
  const itemsValue = [
    props.orderDate,
    props.deliveryDate,
    props.clientName,
    props.paymentMode,
    props.transactionID,
    props.remarks,
  ];

  return (
    <React.Fragment>
      <Box
        padding=".125rem"
        margin="0rem"
        sx={{
          width: "26.25rem",
          bgcolor: "#fff",
          borderRadius: ".5rem",
        }}
      >
        <CardContent style={{ padding: ".9375rem" }}>
          <Stack style={{ padding: "0rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#C4E1C5",
                width: "100%",
                height: "3.75rem",
                borderRadius: ".25rem ",
                padding: "0rem .625rem",
                alignItems: "center",
                margin: ".125rem 0rem",
              }}
            >
              <Typography
                variant="h7"
                style={{
                  margin: "0rem",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  padding: "0rem",
                }}
              >
                ID
              </Typography>
              <Typography margin="0rem" variant="h6">
                {props.key}
              </Typography>
            </Box>
            {itemsName.map((value, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#C4E1C5",
                    width: "100%",
                    height: "3.75rem",
                    borderRadius: ".25rem ",
                    padding: "0rem .625rem",
                    alignItems: "center",
                    margin: ".125rem 0rem",
                  }}
                >
                  <Typography
                    variant="h7"
                    style={{
                      margin: "0rem",
                      fontWeight: "600",
                      fontSize: "1.25rem",
                      textTransform: "uppercase",
                      padding: "0rem",
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography margin="0rem" variant="h6">
                    {itemsValue[index]}
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </CardContent>
      </Box>
    </React.Fragment>
  );
}

export default ProductDetails;
