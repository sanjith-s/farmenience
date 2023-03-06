import React from "react";
import {
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
    Box,
    Paper,
    Button
} from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";

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
        location
    ) => {
        return {
            appID,
            appName,
            clientName,
            dateTime,
            location
        };
    };

    const rows = props.rows.map((row) => {
        return createData(
            row.appID,
            row.appName,
            row.clientName,
            row.dateTime,
            row.location
        );
    });

    const classes = useStyles();

    return (
        <Box>
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
                                    >
                                        <Link to="/n14a">
                                        View Details
                                        </Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default AppointmentList;
