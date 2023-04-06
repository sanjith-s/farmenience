import { useEffect, React, useRef, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Paper from '@mui/material/Paper';
import {
  Typography,
  Container,
  Button,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TableHead
} from "@mui/material";
import { ConsumerName, ConsumerAddress, ConsumerNumber, Quantities, PaymentMethod } from "./pageM12"

const Success = () => {
  const conName = useContext(ConsumerName);
  const conAddress = useContext(ConsumerAddress);
  const conNumber = useContext(ConsumerNumber);
  const quantities = useContext(Quantities);
  const paymentMethod = useContext(PaymentMethod);
  
  console.log(conName);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/M12', { replace: true });
    }, 30000);
  }, []);

  const printRef = useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Invoice.pdf');
  };

  return (
    <Container style={{ padding: "30px 0px" }}>
      <Typography
        variant="h3"
        style={{ textTransform: "uppercase", textAlign: "center" }}
      >
        Success. <Link to='/M12'>Click Here</Link> to redirect.
      </Typography>

      <Button
        variant="contained"
        color="success"
        onClick={handleDownloadPdf}
        style={{
          position: "absolute",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Print Invoice
      </Button>

      {<div ref={printRef}>
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          INVOICE
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Name :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {conName}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Mobile Number :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {conNumber}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Address :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {conAddress}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Payment Method :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {paymentMethod}
        </Typography>

        <TableContainer
          component={Paper}
          style={{
            border: "3px solid",
            width: "fit-content",
            overflow: "auto",
            height: "300px",
          }}
        >
          <Table sx={{ width: "650px", overflow: "auto" }} aria-label="prece table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  qty
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  qty
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quantities && quantities.map((row) => (
                <TableRow key={row.quantity} style={{ borderBottom: "2px solid #000" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
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
                      fontSize: "16px",
                      textTransform: "capitalize",
                    }}
                  >
                    {row.quantity}{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <Typography
          style={{
            display: "flex",
            alignItems: "center",
            textTransform: "uppercase",
            fontWeight: "600",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          Total amount to be paid :
          <Typography
            variant="h6"
            style={{
              fontWeight: "600",
              paddingLeft: "15px",
              width: "30%",
            }}
          >
            ₹ {tot_amount}
          </Typography>
        </Typography> */}
      </div>}

    </Container>
  );
};

export default Success;
