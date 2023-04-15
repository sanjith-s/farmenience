import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Typography, Divider, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width:"auto",
        alignItems: 'center',
        padding: theme.spacing(4),
        // backgroundColor: '#c9f26f',
    },
    card: {
        backgroundColor: '#edf5e1',
        width: '80%',
        margin: theme.spacing(4),
        padding: theme.spacing(2),
        borderRadius:20,
        boxShadow:"20"
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    button: {
        marginRight: theme.spacing(2),
        backgroundColor: '#2b9348',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#1d7044',
        },
    },
    previousQuery: {
        backgroundColor: '#a8dadc',
        padding: theme.spacing(2),
        marginTop: theme.spacing(4),
        width: '80%',
        textAlign: 'left',
    },
    fontsize:{
        fontSize:"40px",
        fontWeight:500
    },
    querycontent:{
        fontStyle:"Italic",
        fontWeight:100
    },  
    boldy:{
        fontWeight:500
    }
}));

const QueryDetails = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom className={classes.fontsize}>
                        {props.query.subject}
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom className={classes.querycontent}>
                        {props.query.description}
                    </Typography>
                    <Divider />
                    <Box mt={2}>
                        <Typography variant="body2" component="p">
                           <Typography className={classes.boldy}> Status: </Typography> {props.query.status}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.boldy}>
                            Date of Submission: {(props.query.updatedAt + "").substr(0, 10)}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.boldy}>
                            Date of Response : {(props.query.createdAt + "").substr(0, 10)}
                        </Typography>
                        <Typography variant="body2" component="p">
                        <Typography className={classes.boldy}> Responder Name: </Typography>{props.query.responser}
                        </Typography>
                    </Box>
                </CardContent>
                <div className={classes.buttonGroup}>
                    {
                        props.query.status === 'Pending' ?
                            <>
                                <Button onClick={() => { navigate('../N10') }} className={classes.button}>Home Page</Button>
                                {props.query.responser = "No response till now"}
                            </>
                            :
                            <>
                                <Button onClick={props.delQuery} className={classes.button}>Accept</Button>
                                <Button onClick={props.handleNotHappy} className={classes.button}>Not Happy with Reply</Button>
                            </>
                    }
                </div>
            </Card>
            {props.prev.map(query => {
                return (
                    <Card className={classes.previousQuery}>
                        <Typography variant="h6" component="h3">
                            {query.subject}
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            {query.description}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {(query.timedate + "").substr(0, 10)}
                        </Typography>
                    </Card>
                )
            })}
        </div>
    );
};

export default QueryDetails;
