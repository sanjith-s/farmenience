import React from 'react';
import Swal from 'sweetalert2';
import "../css/queryBox.css";
import { Button, Card, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QueryBox = (props) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [subject, setSubject] = useState(props.Subject);
    const [desc, setDesc] = useState(props.Desc);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen1x = () => {
        let token = Cookies.get('token');
        let id = props.ID;
        Axios.delete(`http://localhost:5000/deletequery/${id}`, { headers: { tokenstring: token } }).
            then(async (response) => {
                console.log(response);
                if (response.data.message === 'Deleted Successfully') {
                    await Swal.fire({
                        icon: 'success',
                        title: 'Deleted Successfully !',
                    })
                }
            })
            .catch(async (res) => {
                if (res.response.data.message === 'Error in connection') {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please Check Network Connection!',
                    })
                }
                else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Login Error',
                    })
                    navigate('../login')
                }
            })
    };

    const EditQuery = () => {
        let token = Cookies.get('token');
        Axios.put('http://localhost:5000/editquery', {
            subject: subject,
            description: desc,
            id: props.ID
        }, { headers: { tokenstring: token } }).
            then(async (response) => {
                console.log(response);
                if (response.data.message === 'Edited Successfully') {
                    await Swal.fire({
                        icon: 'success',
                        title: 'Edited Successfully !',
                    })
                    navigate('../N1');
                }
            })
            .catch(async (res) => {
                if (res.response.data.message === 'Error in connection') {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please Check Network Connection!',
                    })
                }
                else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Login Error',
                    })
                    navigate('../login')
                }
                else {
                    alert(res.response.data.message);
                }
            })
        setOpen(false);
    }

    const DeleteQuery = async () => {
        await Swal.fire({
            title: 'Do you want to delete the appointment?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Appointment Deleted!',
                })
                handleClickOpen1x();
            }
        })
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
                        <button onClick={DeleteQuery} className="query-card__button query-card__button--delete">
                            Delete
                        </button>
                    </div>
                </div>

                <div id="buttons-n1">
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit Query</DialogTitle>
                        <DialogContent>
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
                            <Button onClick={EditQuery}>Edit</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Card>
        </>
    )
}

export default QueryBox;