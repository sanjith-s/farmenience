import "../css/queryBox.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import React from 'react';
import Typography from '@mui/material/Typography';
import Cookies from 'js-cookie';
import Axios from "axios";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QueryBox = (props) => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open1x, setOpen1x] = React.useState(false);
    const navigate = useNavigate();
    const [subject, setSubject] = useState(props.Subject);
    const [desc, setDesc] = useState(props.Desc);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClickOpen1x = () => {
        setOpen1x(false);
        props.deleteFunc(props.ID);
        let token = Cookies.get('token');
        let id = props.ID;
        Axios.delete(`http://localhost:5000/deletequery/${id}`, { headers: { tokenstring: token } }).
            then((response) => {
                console.log(response);
                if (response.data.message === 'Deleted Successfully') {
                    setOpen2(true);
                }
            })
            .catch((res) => {
                if (res.response.data.message === 'Error in connection') {
                    setOpen3(true);
                }
                else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
                    alert(res.response.data.message);
                    navigate('../login')
                }
            })
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleClose3 = () => {
        setOpen3(false);
    };

    const handleClose4 = () => {
        setOpen4(false);
    };

    const handleClose5 = () => {
        setOpen5(false);
    };

    const handleClose6 = () => {
        setOpen6(false);
    };

    const editQuery = () => {
        let token = Cookies.get('token');
        Axios.put('http://localhost:5000/editquery', {
            subject: subject,
            description: desc,
            id: props.ID
        }, { headers: { tokenstring: token } }).
            then((response) => {
                console.log(response);
                if (response.data.message === 'Edited Successfully') {
                    setOpen4(true);
                    navigate('../N1');
                }
            })
            .catch((res) => {
                if (res.response.data.message === 'Error in connection') {
                    setOpen5(true);
                }
                else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
                    setOpen6(true);
                    navigate('../login')
                }
                else {
                    alert(res.response.data.message);
                }
            })
        setOpen(false);
    }

    const DeleteQuery = () => {
        setOpen1(true);
    }

    return (
        <>
            <Card id="card-n1">
                <div className="query-card">
                    <h3 className="query-card__title">{props.Subject}</h3>
                    <div className="query-card__info">
                        <p className="query-card__id">Query ID: {props.ID}</p>
                        <p className="query-card__date">Date: {props.Date}</p>
                        <p
                            className={`query-card__status query-card__status--${props.Status.toLowerCase()}`}
                        >
                            Status: {props.Status}
                        </p>
                    </div>
                    <div className="query-card__actions">
                        <div>
                        <button onClick={handleClickOpen} className="query-card__button query-card__button--edit">
                            Edit
                        </button>
                        <button onClick={
                            () => {
                                navigate('../N2', { state: { id: props.ID, oldQuery: props.oldQuery, data: props.fullData } })
                            }
                        } className="query-card__button query-card__button--display">
                            Display
                        </button>
                        </div>
                        <button  onClick={DeleteQuery}  className="query-card__button query-card__button--delete">
                            Delete
                        </button>
                    </div>
                </div>
                <Dialog
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Do you want to delete the query ?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose1}>No</Button>
                        <Button onClick={handleClickOpen1x} autoFocus>
                            {" "}
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
                <div id="buttons-n1">
                    {/* <Button variant="contained" color="success" id="button-n1">
                        Display
                    </Button>
                    <Button variant="contained" color="success" id="button-n1">
                        Edit
                    </Button>
                    <Button variant="contained" color="success" id="button-n1">
                        Delete
                    </Button> */}
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit Query</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Edit Query
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Subject"
                                type="Subject"
                                fullWidth
                                defaultValue={props.Subject}
                                variant="standard"
                                inputProps={{
                                    maxLength: 40,
                                    minLength: 1
                                }}
                                onChange={(e) => { setSubject(e.target.value) }}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Description"
                                type="Description"
                                fullWidth
                                defaultValue={props.Desc}
                                variant="standard"
                                inputProps={{
                                    maxLength: 80,
                                    minLength: 1
                                }}
                                onChange={(e) => { setDesc(e.target.value) }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={editQuery}>Edit</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Card>
            <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Deleted Successfully
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose2}>Ok</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open3}
                onClose={handleClose3}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Please Check network connection
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose3}>Ok</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open4}
                onClose={handleClose4}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Edited Successfully
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose4}>Ok</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open5}
                onClose={handleClose5}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Please Check network connection
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose5}>Ok</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open6}
                onClose={handleClose6}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Login error
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose6}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default QueryBox;