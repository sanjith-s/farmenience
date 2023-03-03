import React, { useState } from "react";
import {
    Box,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    CardActions,
    CardContent,
    Typography,
    Card,
    Stack,
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
} from "@mui/material";

const itemsName = [
    "Name: ",
    "Aadhaar Card Number: ",
    "Phone Number: ",
    "Address Line 1: ",
    "Address Line 2: ",
    "City / Town: ",
    "District: ",
    "State: ",
    "Pincode: ",
    "Email Address: "
];

const NGOProfileComp = (props) => {
    const [price, setPrice] = useState(0);
    const [open1, setOpen1] = useState(false);

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
                    width: "500px",
                    borderRadius: "8px",
                    border: "3px solid #888",
                    backgroundColor: "#A7FF91",
                }}
            >
                <CardContent style={{ padding: "15px 25px", alignItems: "center", justifyContent: "center" }}>
                    <Stack sx={{  }}>
                        {itemsName.map((value, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        columnGap: "20px",
                                        justifyContent: "space-between",
                                        height: "50px",
                                        alignItems: "center",
                                        margin: "2px 0px",
                                    }}
                                >
                                    <Typography
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "20px",
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
                    rowGap: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40%",
                }}
            >
            </CardActions>
        </Card>
    );
};

export default NGOProfileComp;