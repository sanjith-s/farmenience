import React from "react";
import AppointmentList from "../components/AppointmentList";
import { Typography, Box, Card } from "@mui/material";

function N13() {
    const appointmentList = [
        {
            appID: 1,
            appName: "Check Land",
            clientName: "Ram",
            dateTime: "02/02/2023 10:30",
            location: "Chennai"
        },
        {
            appID: 2,
            appName: "pH Test",
            clientName: "Mohan",
            dateTime: "03/02/2023 16:45",
            location: "Mumbai"
        },
        {
            appID: 3,
            appName: "Test of Soil Fertility",
            clientName: "Shyam",
            dateTime: "05/02/2023 11:00",
            location: "Jaipur"
        },
        {
            appID: 4,
            appName: "Applying loan",
            clientName: "Ganesh",
            dateTime: "08/02/2023 08:15",
            location: "Madurai"
        },
        {
            appID: 5,
            appName: "Choosing right irrigation pattern",
            clientName: "Mukesh",
            dateTime: "09/02/2023 13:30",
            location: "Cochin"
        },
    ];

    return (
        <Card
            style={{
                padding: "1.25rem 0rem 1.875rem 0rem",
                margin: "1.875rem 6.25rem",
                borderRadius: "0.75rem",
                border: "0.125rem solid",
            }}
        >
            <Box>
                <Typography
                    style={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        fontSize: "2.375rem",
                        fontWeight: "600",
                    }}
                >
                    APPOINTMENT LIST
                </Typography>
            </Box>
            <br></br>
            <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <AppointmentList rows={appointmentList} />
            </Box>
        </Card>
    );
}
export default N13;
