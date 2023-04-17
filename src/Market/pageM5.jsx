import React, { useState } from "react";
import CropCard from "../components/cropCard";
import { Button, Box, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "../css/button.css"

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
        margin: "3.125rem",
        backgroundColor: "white",
        padding: "1.875rem",
        borderRadius: "1.875rem",
        border: ".375rem solid",
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
          marginBottom: "1.25rem",
          marginTop: ".625rem",
        }}
      >
        <Box
          style={{
            margin: "0rem 12.5rem",
            borderRadius: ".625rem",
            width: "51.25rem",
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
                            color="success"
                            style={{
                              margin: "1.875rem 1.875rem .625rem 1.875rem",
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
          paddingBottom: ".625rem 0rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50rem",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={addProd}
          >
            Add Product
          </Button>

          <Button
            variant="contained"
            color="success"
            // className="mbtn"
          >
            <ThumbUpIcon style={{ marginRight: ".9375rem" }} />
            post deal
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PageM5;
