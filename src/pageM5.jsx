import React, { useState } from "react";
import CropCard from "./components/cropCard";
import { Button, Box, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function PageM5() {
  let [prod, setProd] = useState([{ ele: <CropCard />, delStatus: 0, num: 0 }]);
  const addProd = () => {
    setProd([
      ...prod,
      {
        ele: <CropCard />,
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
      <Box>
        <Typography
          variant="h4"
          style={{ textTransform: "uppercase", textAlign: "center" }}
        >
          {" "}
          new crop request{" "}
        </Typography>
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        <Box
          style={{
            margin: "0px 200px",
            borderRadius: "10px",
            width: "820px",
          }}
        >
          {prod.map((val) => {
            return (
              <div>
                {val.delStatus == 0 ? (
                  <Box>
                    <div>
                      {val.ele}
                      {prod.length >= 1 ? (
                        <Box
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              fontWeight: "600",
                              fontSize: "16px",
                              margin: "30px 30px 10px 30px",
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
                      ) : (
                        <></>
                      )}
                    </div>
                  </Box>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px 0px",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "800px",
          }}
        >
          <Button
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

          <Button
            variant="contained"
            style={{
              backgroundColor: "green",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <ThumbUpIcon style={{ marginRight: "15px" }} />
            post deal
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PageM5;
