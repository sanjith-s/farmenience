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
        border: ".1875rem solid",
        width: "fit-content",
        // overflow: "auto",
        // height: "25rem",
      }}
    >
      <Table sx={{ width: "40.625rem", overflow: "auto" }} aria-label="prece table">
        <TableHead
          style={{
            borderTop: "0rem solid",
            borderBottom: ".1875rem solid",
            backgroundColor: "#ccc",
          }}
        >
          <TableRow>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "1.125rem",
                textTransform: "uppercase",
              }}
            >
              sno
            </TableCell>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "1.125rem",
                textTransform: "uppercase",
              }}
            >
              item
            </TableCell>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "1.125rem",
                textTransform: "uppercase",
              }}
            >
              quantity
            </TableCell>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "1.125rem",
                textTransform: "uppercase",
              }}
            >
              price per kg
            </TableCell>
            <TableCell
              align="center"
              style={{
                fontWeight: "600",
                fontSize: "1.125rem",
                textTransform: "uppercase",
              }}
            >
              total price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: "#c8f1d9" }}>
          {rows.map((row) => (
            <TableRow key={row.sno} style={{ borderBottom: ".125rem solid #000" }}>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                }}
              >
                {row.sno}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {row.item}{" "}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                }}
              >
                {row.quantity}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                }}
              >
                {row.eachprice}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
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
