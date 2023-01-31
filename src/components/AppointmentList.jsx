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
                    border: "3px solid",
                    width: "fit-content",
                }}
            >
                <Table
                    sx={{ width: "650px", overflow: "auto" }}
                    aria-label="prece table"
                >
                    <TableHead
                        style={{
                            borderTop: "0px solid",
                            borderBottom: "3px solid",
                            backgroundColor: "#ccc",
                        }}
                    >
                        <TableRow>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Application ID
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Application Name
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Client Name
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Date and Time
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Location
                            </TableCell>
                            <TableCell className={classes.tableRightBorder}
                                align="center"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    textTransform: "uppercase",
                                }}
                            >
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ backgroundColor: "#c8f1d9" }}>
                        {rows.map((row, index) => (
                            <TableRow key={index} style={{ borderBottom: "2px solid #000" }}>
                                <TableCell className={classes.tableRightBorder}
                                    component="th"
                                    scope="row"
                                    align="center"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "18px",
                                    }}
                                >
                                    {row.appID}
                                </TableCell>
                                <TableCell className={classes.tableRightBorder}
                                    align="right"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "16px",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {row.appName}
                                </TableCell>
                                <TableCell className={classes.tableRightBorder}
                                    align="right"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "18px",
                                    }}
                                >
                                    {row.clientName}
                                </TableCell>
                                <TableCell className={classes.tableRightBorder}
                                    align="right"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "18px",
                                    }}
                                >
                                    {row.dateTime}
                                </TableCell>
                                <TableCell className={classes.tableRightBorder}
                                    align="right"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "18px",
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
                                            fontSize: "16px",
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
        </Box>
    );
}

export default AppointmentList;
