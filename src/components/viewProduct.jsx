import React from 'react'
import '../css/viewProduct.css'

const ViewProduct = (props) => {
  return(
    <div className='popup'>
        <div className='popup_inner'>
          <h1>{props.text}</h1>
        <button onClick={props.closePopup}>close me</button>
        </div>
      </div>
    ); 
}

export default ViewProduct