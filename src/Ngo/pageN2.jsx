import React from 'react';
import '../css/pageN2.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const PageN2 = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;

    return (
        <>
        <div className="ext-cont">
            <div></div>
            <div></div>
            <div className="cont-header">Query Details</div>
            <div></div>
            <div className="main-cont">
                <div className="main-div-cont">
                    <div className="att-header">Query ID</div>
                    <div className="att-val">e599993424312</div>
                </div>
                <div className="main-div-cont">
                    <div className="att-header">Query Subject</div>
                    <div className="att-val">How to plant rice ?</div>
                </div>
                <div className="main-div-cont">
                    <div className="att-header">Description</div>
                    <div className="att-val">Pls Help me NGO's</div>
                </div>
                <div className="main-div-cont">
                    <div className="att-header">Status</div>
                    <div className="att-val">None</div>
                </div>
                <div className="main-div-cont">
                    <div className="att-header">Response</div>
                    <div className="att-val">Nothing Yet</div>
                </div>
                <div className="main-div-cont">
                    <div className="att-header">Date of Submission</div>
                    <div className="att-val"><input type="date" className="inp" /></div>
                </div>
                <div className="main-div-cont">
                    <div className="att-header">Date of response</div>
                    <div className="att-val"><input type="date" className="inp" /></div>
                </div>
                <div className="main-div-cont">
                    <div className="att-header">Details</div>
                    <div className="att-val">Damn, Messi is Good.</div>
                </div>
            </div>
            <div></div>
            <div className="btn-container">
                <button className="acpt-btn">Accept</button>
                <a href='' className="link">Not happy with the reply?</a>
            </div>
            <div></div>

            <Button variant="contained" sx={{backgroundColor:"#fafa01", color:"black" , "&:hover": {
                    backgroundColor:"#ffff00",
                  } }}>
                Submit
            </Button>





            




        </div>

        
        
        </>



    )
}

export default PageN2;