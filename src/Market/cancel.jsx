import {useEffect, React} from "react";
import { Link, useNavigate} from 'react-router-dom';
import {
    Typography,
    Container,
} from "@mui/material";

const Cancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
      setTimeout(() => {
        navigate('/M12', { replace: true });
      }, 30000);
    }, []);

  return (
    <Container style={{ padding: "1.875rem 0rem" }}>
      <Typography
        variant="h3"
        style={{ textTransform: "uppercase", textAlign: "center" }}
      >
        Cancelled. <Link to='/M12'>Click Here</Link> to redirect.
      </Typography>
      
    </Container>
  );
};

export default Cancel;
