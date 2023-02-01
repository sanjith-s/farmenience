import React from "react";
import queryList from "../components/queryList";
import { Box, Typography } from "@mui/material";
import wheat from "../wheatimg.jpg";
import carrot from "../carrot.jpg";

const content = [
  {
    queryID: 100,
    queryName: "What is the right crop to grow this season ?",
    date: "14 Jan 2023"
  },
  {
    queryID: 101,
    queryName: "What is the irrigation pattern to follow this season ?",
    date:"11 Jan 2023"
  },
  {
    queryID: 102,
    queryName: "How to grow crops without expensive chemical fertilizers ?",
    date: "13 Jan 2023"
  },
  {
    queryID: 103,
    queryName: "Anyone willing to provide warehouse facilities for the produce in the farm ?",
    date: "14 Jan 2023"
  },
  {
    queryID: 104,
    queryName: "How to apply for crop insurance ?",
    date: "12 Jan 2023"
  },
];

function PageN11() {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px 0px",
        marginBottom: "40px",
      }}
    >
      <Box sx={{ padding: "20px 0px" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "600", textTransform: "uppercase" }}
        >
          you have {content.length} requests{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "fit-content",
          border: "5px solid",
          borderRadius: "3px",
          backgroundColor: "#bdfbbf",
        }}
      >
        <Box
          sx={{
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "50px",
            rowGap: "50px",
          }}
        >
          {content.map((req, index) => {
            return (
              <queryList
                key={index + 1}
                queryId={req.queryID}
                queryName={req.queryName}
                date={req.date}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
export default PageN11;