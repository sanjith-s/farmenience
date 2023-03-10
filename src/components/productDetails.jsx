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
        padding="2px"
        margin="0px"
        sx={{
          width: "420px",
          bgcolor: "#fff",
          borderRadius: "8px",
        }}
      >
        <CardContent style={{ padding: "15px" }}>
          <Stack style={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#C4E1C5",
                width: "100%",
                height: "60px",
                borderRadius: "4px ",
                padding: "0px 10px",
                alignItems: "center",
                margin: "2px 0px",
              }}
            >
              <Typography
                variant="h7"
                style={{
                  margin: "0px",
                  fontWeight: "600",
                  fontSize: "20px",
                  textTransform: "uppercase",
                  padding: "0px",
                }}
              >
                sale name
              </Typography>
              <Typography margin="0px" variant="h6">
                xxxyyyzzz
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
                    height: "60px",
                    borderRadius: "4px ",
                    padding: "0px 10px",
                    alignItems: "center",
                    margin: "2px 0px",
                  }}
                >
                  <Typography
                    variant="h7"
                    style={{
                      margin: "0px",
                      fontWeight: "600",
                      fontSize: "20px",
                      textTransform: "uppercase",
                      padding: "0px",
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography margin="0px" variant="h6">
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
