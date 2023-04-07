// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
//   CardMedia,
//   Box,
//   Badge,
// } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

// function MarketCard(props) {
//   return (
//     <Card
//       style={{
//         padding: "10px",
//         borderRadius: "5px",
//         border: "5px solid darkmagenta",
//         width: "250px",
//         position: "relative",
//       }}
//     >
//       <CardMedia style={{ display: "flex", justifyContent: "center" }}>
//         <img width="100px" src={img} alt="product image" />
//       </CardMedia>
//       <CardContent
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           rowGap: "6px",
//           justifyContent: "center",
//           padding: "8px",
//         }}
//       >
//         <Typography
//           style={{
//             textTransform: "uppercase",
//             fontWeight: "600",
//             fontSize: "24px",
//             color: "darkorchid",
//             textAlign: "center",
//             paddingBottom: "3px",
//           }}
//         >
//           {props.productName}
//         </Typography>
//         <Typography
//           style={{
//             textTransform: "uppercase",
//             fontWeight: "600",
//             fontSize: "15px",
//             color: "grey",
//           }}
//         >
//           sellers - {props.sellerCount}
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography
//             style={{
//               textTransform: "uppercase",
//               fontWeight: "400",
//               color: "brown",
//             }}
//           >
//             starting from{" "}
//           </Typography>
//           <Typography
//             sx={{
//               textTransform: "uppercase",
//               fontWeight: "600",
//               fontSize: "24px",
//               color: "blue",
//               textAlign: "center",
//             }}
//           >
//             ₹ {props.price}
//           </Typography>
//         </Box>
//         <Box sx={{ position: "absolute", top: "1px", right: "1px" }}>
//           <Badge
//             color="info"
//             badgeContent={<Typography>{props.stars}</Typography>}
//             showZero
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             style={{ position: "sticky" }}
//           >
//             <StarRoundedIcon style={{ color: "orange", fontSize: "30px" }} />
//           </Badge>
//         </Box>
//       </CardContent>
//       <CardActions
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//         }}
//       >
//         <Button
//           variant="contained"
//           style={{
//             backgroundColor: "grey",
//             color: "white",
//             columnGap: "10px",
//             fontWeight: "600",
//           }}
//         >
//           view
//         </Button>
//         <Button
//           style={{
//             backgroundColor: "green",
//             color: "white",
//             columnGap: "10px",
//             fontWeight: "600",
//           }}
//         >
//           <ShoppingCartIcon /> buy
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default MarketCard;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import img from "../images/product8.jpg";
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "10px 15px",
        boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
        background:"linear-gradient(white,#74e81c)"
      }}>
      <CardMedia
        sx={{ height: "200px" }}
        image={img}
        title="green iguana"
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" style={{fontWeight:"bold",textAlign:"center"}} component="div">
          {props.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
          Sellers - {props.sellerCount}
        </Typography>

      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button size="small" variant="contained">View</Button>
        <Typography variant="h6" color="text.success">
          ₹ {props.price}
        </Typography>
        <Button
          size="small"
          style={{
            backgroundColor: "green",
            color: "white",
          }}
        >
          <ShoppingCartIcon /> buy
        </Button>
      </CardActions>
    </Card>
  );
}