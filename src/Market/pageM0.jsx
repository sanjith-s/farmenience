import { Stack, Grid, Container, Button } from '@mui/material'
import { Typography } from '@material-ui/core'
import React from 'react'
import Notification from '../components/Notification';
import { Link } from 'react-router-dom';
import OrderTrack from '../components/OrderTrack';

const PageM0 = () => {

    const Notifications = [
        {
            notificationId: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat turpis, venenatis at ipsum at, sodales porta libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. "
        },
        {
            notificationId: 2,
            message: "Duis euismod mi velit, eu congue libero dapibus id. Praesent vel hendrerit lectus, ut congue tellus. Etiam ante justo, pellentesque non odio in, finibus pulvinar risus. "
        },
        {
            notificationId: 3,
            message: " Praesent finibus pretium sollicitudin. Donec pharetra, sem et tristique sagittis, est sem egestas libero, at vulputate leo sem vestibulum urna. Donec pharetra ligula eu mi posuere, vitae ultrices tortor auctor."
        },
        {
            notificationId: 4,
            message: " Proin ultrices velit sit amet ex posuere, non pulvinar diam finibus. Quisque porttitor ultricies felis, at malesuada tellus. Quisque tincidunt odio non magna pulvinar tincidunt. Maecenas faucibus id massa vel suscipit."
        },
    ];

    const track = [
        {
            trackId: 1,
            orderNum: 1,
            destination: "Marley"
        },
        {
            trackId: 2,
            orderNum: 2,
            destination: "Wall Rose"
        },
        {
            trackId: 3,
            orderNum: 3,
            destination: "Paradis Island"
        },
        {
            trackId: 4,
            orderNum: 4,
            destination: "Wall Maria"
        }
    ];

    return (
    <div>
        <Container>
        <Stack>
        Welcome To Page Design
        Leave now.
        <Grid container spacing={20}>
            <Grid item xs = {5}>
                <Stack>Track Order Components</Stack>
                <Stack>
                    {
                        track.map((index) => {
                            return(
                                <OrderTrack
                                key = {index +1}
                                orderNum = {index.orderNum}
                                destination = {index.destination}
                                />
                            );                                
                        })
                    }
                </Stack>
                </Grid>
            <Grid item xs = {3}>
                <Stack>Display Sale Requests</Stack>
                <Stack>
                <Button
                style={{
                    backgroundColor: "green",
                    border: "2px solid #000000",
                    marginTop: "15px",
                  }}>
                    <Link 
                        to="/M1"
                        style={{ textDecoration: "none" }}
                        >
                        <Typography>VIEW SALES</Typography>    
                        </Link>
                </Button>
                </Stack>
            </Grid>
            <Grid item xs = {3}>Notifications
                {
                    Notifications.map((req, index) => {
                        return(
                            <Notification
                            key = {index + 1}
                            notificationId = {req.notificationId}
                            message = {req.message}
                            />
                        );
                    })
                }
            </Grid>
        </Grid>
        </Stack>
        </Container>
    </div>
  )
}

export default PageM0