import React from 'react';
import Request from './RequestsDetails';
import './css/request.css';
function AllRequest() {
    const listOfRequests = [
    {
        meetDate:"2023-01-31",
        meetTime:"04:30",
        cropsGrowing:"paddy, wheat",
        meetReason:"The reason is to discuss about increase the producity of paddy",
        soilDetails:"red soil used to grow sbjkbsjkb",
        NGOType:"NGO",
        img_src:""
    },
    {
        meetDate:"2022-11-19",
        meetTime:"02:30",
        cropsGrowing:"paddy, wheat",
        meetReason:"The reason is to discuss about increase the producity of paddy",
        soilDetails:"red soil used to grow sbjkbsjkb",
        NGOType:"NGO",
        img_src:""
    }
    ]
	return (
     <div className="">
     <p className="total-req-count">(PAGE N6) You Have N Request</p>
     {listOfRequests.map((request,index) => {
       return <Request ReqNo={index} meetDate={request.meetDate} meetTime={request.meetTime} cropsGrowing={request.cropsGrowing}
        meetReason={request.meetReason} soilDetails={request.soilDetails}
        img_src={request.img_src} NGOType={request.NGOType} />
     })}</div>
	)
}
export default AllRequest;