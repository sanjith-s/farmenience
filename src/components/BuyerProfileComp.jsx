import React from "react";
import {
    Box,
    CardActions,
    CardContent,
    Typography,
    Card,
    Stack,
} from "@mui/material";

const itemsName = [
    "Name: ",
    "Aadhaar Number: ",
    "Phone Number: ",
    "Address Line 1: ",
    "Address Line 2: ",
    "City / Town: ",
    "District: ",
    "State: ",
    "Pincode: ",
    "Email Address: "
];

const BuyerProfileComp = (props) => {
    const itemsValue = [
        props.name,
        props.aadhaar,
        props.phone,
        props.address1,
        props.address2,
        props.citytown,
        props.district,
        props.state,
        props.pincode,
        props.email,
    ];

    return (
        <Card
            sx={{
                justifyItems: "center"
            }}
        >
            <Box
                sx={{
                    width: "31.25rem",
                    borderRadius: ".5rem",
                    border: ".1875rem solid #888",
                    backgroundColor: "#A7FF91",
                }}
            >
                <CardContent style={{ padding: ".9375rem 1.5625rem", alignItems: "center", justifyContent: "center" }}>
                    <Stack sx={{  }}>
                        {itemsName.map((value, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        columnGap: "1.25rem",
                                        justifyContent: "space-between",
                                        height: "3.125rem",
                                        alignItems: "center",
                                        margin: ".125rem 0rem",
                                    }}
                                >
                                    <Typography
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "1.25rem",
                                            textTransform: "uppercase",
                                            color: "#000",
                                        }}
                                    >
                                        {value}
                                    </Typography>
                                    <Typography variant="h6">{itemsValue[index]}</Typography>
                                </Box>
                            );
                        })}
                    </Stack>
                </CardContent>
            </Box>
            <CardActions
                style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1.875rem",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40%",
                }}
            >
            </CardActions>
        </Card>
    );
};

export default BuyerProfileComp;