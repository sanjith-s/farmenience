import React from "react";
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
                  borderRight: "3px solid",
                }}
              >
                trans. id
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  borderRight: "3px solid",
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
                  borderRight: "3px solid",
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
                  borderRight: "3px solid",
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
                  borderRight: "3px solid",
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
                  borderRight: "3px solid",
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
                    borderRight: "3px solid",
                    textAlign: "center"
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
                    borderRight: "3px solid",
                    textAlign: "center"
                  }}
                >
                  {row.transactionid}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    borderRight: "3px solid",
                    textAlign: "center"
                  }}
                >
                  {row.paymentMode}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    borderRight: "3px solid",
                    textAlign: "center"
                  }}
                >
                  {row.bankName}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    borderRight: "3px solid",
                    textAlign: "center"
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
                    borderRight: "3px solid",
                    textAlign: "center"
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
                    textAlign: "center"
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
