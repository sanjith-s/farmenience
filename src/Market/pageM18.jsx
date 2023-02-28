import React, { useState } from "react";
import ProductCard from "../components/productCard";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import { Button, Box, Typography } from "@mui/material";

const PageM18 = () => {
  let [prod, setProd] = useState([
    { ele: <ProductCard />, delStatus: 0, num: 0 },
  ]);

  const addProd = () => {
    setProd([
      ...prod,
      {
        ele: <ProductCard />,
        delStatus: 0,
        num: prod[prod.length - 1].num + 1,
      },
    ]);
  };
  return (
    <Box
      sx={{
        margin: "50px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "30px",
        border: "6px solid",
      }}
    >
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h4"
          style={{ textTransform: "uppercase", textAlign: "center" }}
        >
          {" "}
          publish new request{" "}
        </Typography>
      </Box>
      <Box
        style={{
          margin: "0px 200px",
          paddingTop: "30px",
          borderRadius: "10px",
        }}
      >
        {prod.map((val) => {
          return (
            <Box>
              {val.delStatus == 0 ? (
                <Box>
                  {val.ele}
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Button endIcon={<DeleteIcon />}
                      variant="contained"
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        fontWeight: "600",
                        fontSize: "16px",
                        margin: "30px",
                      }}
                      onClick={() => {
                        let temp = prod.map((id) => {
                          if (id.num == val.num) {
                            return { ...id, delStatus: 1 };
                          } else {
                            return id;
                          }
                        });
                        setProd(temp);
                      }}
                    >
                      delete
                    </Button>
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "800px",
          }}
        >
          <Button endIcon={<AddIcon />}
            variant="contained"
            onClick={addProd}
            style={{
              backgroundColor: "green",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Add Product
          </Button>
          <Button endIcon={<DoneIcon />}
            variant="contained"
            style={{
              backgroundColor: "green",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            submit request
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PageM18;
