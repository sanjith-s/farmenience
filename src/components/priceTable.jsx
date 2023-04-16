import React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Col, Divider, Row, Table } from 'antd';

function PriceTable(props) {
  let count = 0;

  const createData = (sno, item, quantity, eachprice, price) => {
    return { sno, item, quantity, eachprice, price };
  };

  const rows = props.rows.map((row) => {
    return createData(
      row.sno,
      row.name,
      row.quantity,
      row.unitPrice,
      row.quantity * row.unitPrice
    );
  });

  return (
    <TableContainer
      component={Paper}
      style={{
        border: ".1875rem solid",
        width: "fit-content",
        overflow: "auto",
      }}
    >
      <Table dataSource={props.rows}
        pagination={false}
        >
          <Table.Column title="S. No" dataIndex='sno' />
          <Table.Column title="Item" dataIndex='name' />
          <Table.Column title="Quantity" dataIndex='quantity' />
          <Table.Column title="Price / kg" dataIndex='unitPrice' />
          <Table.Column title="Total Price (In Rs.)" dataIndex='total' />
        </Table>
    </TableContainer>
  );
}

export default PriceTable;
