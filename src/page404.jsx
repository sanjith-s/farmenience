import { Typography,Stack } from "@mui/material";

function Page404(){
    return(
        <>
        <Stack alignItems={"center"}>
        <Typography sx={{
            fontSize:"250px"
        }}>404</Typography>
        <Typography fontSize={"50px"} fontWeight={"500"}>Page Not Found</Typography>
        

        </Stack>
        </>
    );
}
export default Page404;