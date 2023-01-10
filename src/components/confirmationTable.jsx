import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function ConfirmationTable(props) {
  const createData = (sno, item, quantity, eachprice, price) => {
    return { sno, item, quantity, eachprice, price };
  };

  const rows = props.rows.map((row) => {
    return createData(
      row.sno,
      row.item,
      row.quantity,
      row.eachPrice,
      row.quantity * row.eachPrice
    );
  });

  return (
    <TableContainer
      component={Paper}
      style={{
        border: "3px solid",
        width: "fit-content",
        // overflow: "auto",
        // height: "400px",
      }}
    >
      <Table sx={{ width: "650px", overflow: "auto" }} aria-label="prece table">
        <TableHead
          style={{
            borderTop: "0px solid",
            borderBottom: "3px solid",
            backgroundColor: "#ccc",
          }}
        >
          <TableRow>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "18px",
                textTransform: "uppercase",
              }}
            >
              sno
            </TableCell>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "18px",
                textTransform: "uppercase",
              }}
            >
              item
            </TableCell>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "18px",
                textTransform: "uppercase",
              }}
            >
              quantity
            </TableCell>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "18px",
                textTransform: "uppercase",
              }}
            >
              price per kg
            </TableCell>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "18px",
                textTransform: "uppercase",
              }}
            >
              total price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: "#c8f1d9" }}>
          {rows.map((row) => (
            <TableRow key={row.sno} style={{ borderBottom: "2px solid #000" }}>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                {row.sno}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                {row.item}{" "}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                {row.quantity}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                {row.eachprice}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ConfirmationTable;
