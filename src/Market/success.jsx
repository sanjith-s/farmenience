import {useEffect, React} from "react";
import { Link, useNavigate} from 'react-router-dom';
import {
    Typography,
    Container,
} from "@mui/material";


const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
      setTimeout(() => {
        navigate('/M12', { replace: true });
      }, 30000);
    }, []);

  return (
    <Container style={{ padding: "30px 0px" }}>
      <Typography
        variant="h3"
        style={{ textTransform: "uppercase", textAlign: "center" }}
      >
        Success. <Link to='/M12'>Click Here</Link> to redirect.
      </Typography>
      
    </Container>
  );
};

export default Success;
