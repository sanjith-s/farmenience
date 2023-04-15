import React from 'react'

const Reset1 = () => {
    return (

        <Container style={{ padding: "30px 0px" }}>
            <Typography
                variant="h3"
                style={{ textTransform: "uppercase", textAlign: "center" }}
            >
                Reset Password
            </Typography>
            <Container>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <Button variant="contained">Submit</Button>
            </Container>


        </Container>

    )
}

export default Reset1