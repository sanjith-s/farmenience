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
// import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
// import { TableColumnResizing } from '@devexpress/dx-react-grid-material-ui';

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
          border: ".1875rem solid",
          width: "fit-content",
        }}
        sx={{
          height: "25rem"    
        }}
      >
        <Table
          sx={{ width: "40.625rem", overflow: "auto", height: "max-content" }}
          aria-label="prece table"
        >
          <TableHead
            style={{
              borderTop: "0rem solid",
              borderBottom: ".1875rem solid",
              backgroundColor: "#ccc",
              position: "sticky",
                  top: 0
            }}
          >
            <TableRow style={{
              position: "sticky",
              top: 0,
              borderBottom: ".1875rem solid",
            }}>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  textTransform: "uppercase",
                  borderRight: ".1875rem solid",
                  position: "sticky",
                  top: 0,
                  borderBottom: ".1875rem solid",
                }}
              >
                trans. id
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  textTransform: "uppercase",
                  borderRight: ".1875rem solid",
                  position: "sticky",
                  top: 0
                }}
              >
                ifsc_code
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  textTransform: "uppercase",
                  borderRight: ".1875rem solid",
                  position: "sticky",
                  top: 0
                }}
              >
                payment mode
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  textTransform: "uppercase",
                  borderRight: ".1875rem solid",
                  position: "sticky",
                  top: 0
                }}
                sx={{
                  width: "100%"
                }}
              >
                bank name
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  textTransform: "uppercase",
                  borderRight: ".1875rem solid",
                  position: "sticky",
                  top: 0
                }}
              >
                amount
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  textTransform: "uppercase",
                  borderRight: ".1875rem solid",
                  position: "sticky",
                  top: 0
                }}
              >
                sender
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  textTransform: "uppercase",
                  position: "sticky",
                  top: 0
                }}
              >
                receiver
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "#c8f1d9" }}>
            {rows.map((row, index) => (
              <TableRow key={index} style={{ borderBottom: ".125rem solid #000" }}>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.125rem",
                    borderRight: ".1875rem solid",
                    textAlign: "center"
                  }}
                >
                  {row.ifscCode}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    borderRight: ".1875rem solid",
                    textAlign: "center"
                  }}
                >
                  {row.transactionid}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.125rem",
                    borderRight: ".1875rem solid",
                    textAlign: "center"
                  }}
                >
                  {row.paymentMethod}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.125rem",
                    borderRight: ".1875rem solid",
                    textAlign: "center"
                  }}
                >
                  {row.bankName}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.125rem",
                    borderRight: ".1875rem solid",
                    textAlign: "center"
                  }}
                >
                  {row.amount}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    borderRight: ".1875rem solid",
                    textAlign: "center"
                  }}
                >
                  {row.sender}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "600",
                    fontSize: "1rem",
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
