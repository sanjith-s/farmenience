import React from 'react';
import '../css/pageN2.css';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import { useEffect,useState } from "react";

const PageN2 = () => {
    const location = useLocation();
    const navigate=useNavigate();
    const id=location.state.id;
  return (
    <div class="ext-cont">
        <div></div>
        <div></div>
        <div class="cont-header">Query Details</div>
        <div></div>
        <div class="main-cont">
            <div class="main-div-cont">
                <div class="att-header">Query ID</div>
                <div class="att-val">e599993424312</div>
            </div>
            <div class="main-div-cont">
                <div class="att-header">Query Subject</div>
                <div class="att-val">How to plant rice ?</div>
            </div>
            <div class="main-div-cont">
                <div class="att-header">Description</div>
                <div class="att-val">Pls Help me NGO's</div>
            </div>
            <div class="main-div-cont">
                <div class="att-header">Status</div>
                <div class="att-val">None</div>
            </div>
            <div class="main-div-cont">
                <div class="att-header">Response</div>
                <div class="att-val">Nothing Yet</div>
            </div>
            <div class="main-div-cont">
                <div class="att-header">Date of Submission</div>
                <div class="att-val"><input type="date" class="inp"/></div>
            </div>
            <div class="main-div-cont">
                <div class="att-header">Date of response</div>
                <div class="att-val"><input type="date" class="inp"/></div>
            </div>
            <div class="main-div-cont">
                <div class="att-header">Details</div>
                <div class="att-val">Damn, Messi is Good.</div>
            </div>
        </div>
        <div></div>
        <div class="btn-container">
            <button class="acpt-btn">Accept</button>
            <a href='' class="link">Not happy with the reply?</a>
        </div>
        <div></div>
    </div>
  )
}

export default PageN2;