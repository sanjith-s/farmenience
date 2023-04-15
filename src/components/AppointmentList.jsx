import React from "react";
import {
    Card
} from "@mui/material";
import "../css/queryBox.css";
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {},
    tableRightBorder: {
        borderWidth: 0,
        borderRightWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
    },
}));

function AppointmentList(props) {
    const createData = (
        appID,
        appName,
        clientName,
        dateTime,
        location,
        crops,
        reason
    ) => {
        return {
            appID,
            appName,
            clientName,
            dateTime,
            location,
            crops,
            reason
        };
    };

    const rows = props.data.map((row) => {
        return createData(
            row._id,
            row.details,
            row.farmername,
            row.updatedAt,
            row.location,
            row.crops,
            row.reason
        );
    });

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div>
        <Card id="card-n1">
                  <div>
                     {rows.map((row, index) => (
                        <div className="query-card">
                          <h3 className="query-card__title">{row.appName}</h3>
                          <div className="query-card__info">
                          <p className="query-card__id">Application ID: {row.appID}</p>
                          <p className="query-card__date">Client Name: {row.clientName}</p>
                          <p className="query-card__date">Date: {row.dateTime}</p>
                          <p className="query-card__date">Location: {row.location}</p>
                          </div>
                          <div className="query-card__actions">
                          <div>
                              <button onClick={() => {
                                            navigate('../N14a', { state: { data: row } })
                                        }}
                              className="query-card__button query-card__button--respond">
                              View Details
                              </button>
                          </div>
                          </div>
                    </div>
                      ))}
                  </div>
        </Card>
        </div>
/*         <Box>
            <TableContainer
                component={Paper}
                style={{
                    border: "0.19rem solid",
                    width: "fit-content",
                }}
            >
                <Table
                    sx={{ width: "40.625rem", overflow: "auto" }}
                    aria-label="prece table"
                >
                    <TableHead
                        style={{
                            borderTop: "0rem solid",
                            borderBottom: "0.19 solid",
                            backgroundColor: "#ccc",
                        }}
                    >
                        <TableRow>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "1.125rem",
                                    textTransform: "uppercase",
                                }}
                            >
                                Application ID
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "1.125rem",
                                    textTransform: "uppercase",
                                }}
                            >
                                Application Name
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "1.125rem",
                                    textTransform: "uppercase",
                                }}
                            >
                                Client Name
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "1.125rem",
                                    textTransform: "uppercase",
                                }}
                            >
                                Date and Time
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "1.125rem",
                                    textTransform: "uppercase",
                                }}
                            >
                                Location
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "1.125rem",
                                    textTransform: "uppercase",
                                }}
                            >
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ backgroundColor: "#c8f1d9" }}>
                        {rows.map((row, index) => (
                            <TableRow key={index} style={{ borderBottom: "0.125 solid #000" }}>
                                <TableCell className={classes.tableRightBorder}
                                    component="th"
                                    scope="row"
                                    align="center"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "1.125rem",
                                    }}
                                >
                                    {row.appID}
                                </TableCell>
                                <TableCell className={classes.tableRightBorder}
                                    align="right"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "1rem",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {row.appName}
                                </TableCell>
                                <TableCell className={classes.tableRightBorder}
                                    align="right"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "1.125rem",
                                    }}
                                >
                                    {row.clientName}
                                </TableCell>
                                <TableCell className={classes.tableRightBorder}
                                    align="right"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "1.125rem",
                                    }}
                                >
                                    {row.dateTime}
                                </TableCell>
                                <TableCell className={classes.tableRightBorder}
                                    align="right"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "1.125rem",
                                    }}
                                >
                                    {row.location}
                                </TableCell>
                                <TableCell className={classes.tableRightBorder}
                                >
                                    <Button
                                        variant="contained"
                                        style={{
                                            backgroundColor: "green",
                                            color: "white",
                                            fontWeight: "600",
                                            fontSize: "1rem",
                                        }}
                                        onClick={() => {
                                            navigate('../N14a', { state: { data: row } })
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box> */
    );
}

export default AppointmentList;
