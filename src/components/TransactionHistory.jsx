import React from "react";
import "../css/transactionHistory.css";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Box,
  Paper,
} from "@mui/material";

function TransactionHistory(props) {
  const createData = (
    ifscCode,
    transactionid,
    paymentMethod,
    bankName,
    amount,
    sender,
    receiver
  ) => {
    return {
      ifscCode,
      transactionid,
      paymentMethod,
      bankName,
      amount,
      sender,
      receiver,
    };
  };

  const rows = props.rows.map((row) => {
    return createData(
      row.ifscCode,
      row.transactionid,
      row.paymentMethod,
      row.bankName,
      row.amount,
      row.sender,
      row.receiver
    );
  });

  return (
    <Box>
      <TableContainer
        component={Paper}
        style={{
          border: "3px solid",
          width: "fit-content",
          overflow: "auto",
          height: "350px",
        }}
      >
        <Table
          sx={{ width: "650px", overflow: "auto" }}
          aria-label="prece table"
        >
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
                t.id
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                ifsc_code
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                payment mode
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                bank name
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                amount
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                sender
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                receiver
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "#c8f1d9" }}>
            {rows.map((row, index) => (
              <TableRow key={index} style={{ borderBottom: "2px solid #000" }}>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  {row.ifscCode}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  {row.transactionid}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  {row.paymentMode}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  {row.bankName}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  {row.amount}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  {row.sender}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  {row.receiver}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TransactionHistory;
