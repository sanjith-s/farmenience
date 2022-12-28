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

function PriceTable() {
  const createData = (sno, item, quality, eachprice, price) => {
    return { sno, item, quality, eachprice, price };
  };
  const rows = [
    createData(1, "rice", 30, 20, 600),
    createData(2, "wheat", 20, 40, 800),
    createData(3, "ragi", 60, 7, 420),
    createData(4, "fibre", 0, 42, 0),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "650px" }} aria-label="prece table">
        <TableHead>
          <TableRow>
            <TableCell>sno</TableCell>
            <TableCell>item</TableCell>
            <TableCell>quantity</TableCell>
            <TableCell>price per kg</TableCell>
            <TableCell>total price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.sno}>
              <TableCell component="th" scope="row" alright="center">
                {row.sno}
              </TableCell>
              <TableCell align="right">{row.item} </TableCell>
              <TableCell align="right">{row.quality}</TableCell>
              <TableCell align="right">{row.eachprice}</TableCell>
              <TableCell align="right">{row.quality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PriceTable;
