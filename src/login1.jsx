import { useState, useRef } from "react";
import { Box, Typography, Input } from "@mui/material";

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <Box sx={{ margin: "30px", border: "3px solid", borderRadius: "20px", padding: "40px", boxShadow: 20, backgroundColor: "lightyellow" }}>
            <form
                // onSubmit={submit}
                method="post"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "30px",
                }}
            >
                <Box>
                    <Typography variant="h4" style={{ textAlign: "center", backgroundColor: "lightgreen" }}>
                        LOGIN PAGE
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        rowGap: "30px",
                        width: "fit-content",
                        border: "3px solid",
                        borderRadius: "20px", 
                        padding: "40px",
                        backgroundColor: "lightblue"
                    }}>
                    <Box sx={{ display: "flex", columnGap: "30px" }}>
                        <Typography style={{ textTransform: "uppercase", alignSelf: "flex-end" }}>
                            Enter email:
                        </Typography>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                        // onChange={handleChange}
                        />
                    </Box>

                    <Box sx={{ display: "flex", columnGap: "30px" }}>
                        <Typography style={{ textTransform: "uppercase", alignSelf: "flex-end" }}>
                            Enter password:
                        </Typography>
                        <Input
                            type="email"
                            id="email"
                            value={pass}
                        // onChange={handleChange}
                        />
                    </Box>
                </Box>
            </form>
        </Box >
    );
}

export default Login