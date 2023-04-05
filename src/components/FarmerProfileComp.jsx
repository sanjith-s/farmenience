import React, { useState } from "react";
import {
    Box,
    CardActions,
    CardContent,
    Typography,
    Card,
    Stack,
    TextField,
    Button
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
    "Email Address: ",
];

const FarmerProfileComp = (props) => {
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
        props.cropsgrown,
        props.skills
    ];

    const [crops, setCrops] = useState();
    const [skills, setSkills] = useState();

    const handleAllChange = () => {
        setCrops(document.querySelector("#crops").value);
        setSkills(document.querySelector("#skills").value);
    }

    const handleSubmit = () => {
        alert("Hi")
    }

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
                    <Stack sx={{}}>
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

                        <Box
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
                                Crops Grown:
                            </Typography>
                            <TextField
                                id="crops"
                                variant="filled"
                                color="success"
                                value={crops}
                                onChange={handleAllChange}
                                sx={{
                                    backgroundColor: "white",
                                    borderBottomColor: "black",
                                    width: "50%",
                                }}
                                inputProps={{
                                    minLength: 1,
                                    maxLength: 25
                                }}
                            />
                        </Box>

                        <Box
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
                                Skills:
                            </Typography>
                            <TextField
                                id="skills"
                                variant="filled"
                                color="success"
                                value={skills}
                                onChange={handleAllChange}
                                sx={{
                                    backgroundColor: "white",
                                    borderBottomColor: "black",
                                    width: "50%",
                                }}
                                inputProps={{
                                    minLength: 1,
                                    maxLength: 25
                                }}
                            />
                        </Box>
                    </Stack>
                </CardContent>
            </Box>

            <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
                style={{
                    position: "absolute",
                    fontSize: "16px",
                    fontWeight: "600",
                }}
            >
                Update Details
            </Button>

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
        </Card >
    );
};

export default FarmerProfileComp;