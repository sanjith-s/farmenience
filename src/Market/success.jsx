import { useEffect, React, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {
  Typography,
  Container,
  Button
} from "@mui/material";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/M12', { replace: true });
    }, 30000);
  }, []);

  const printRef = useRef();
  const handleDownloadPdf = async () => {
    alert('1');
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

      {<div ref={printRef}>I will be in the PDF.</div>}

    </Container>
  );
};

export default Success;
