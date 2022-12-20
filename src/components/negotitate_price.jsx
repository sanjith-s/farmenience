import { useState } from 'react'
import '../css/pageM16.css'

const Negotiate = (props) =>{
    const [price,setPrice]=useState(0);
    const displayPrice = ()=>{
        alert('The price is '+price)
    }
    return (
        <>
        <div id="main-com">
            <div id="left">
                <table id="left-content">
                    <tr>
                        <td id="left-table">
                            Product Name
                        </td>
                        <td id="right-table">
                            : {props.Name}
                        </td>
                    </tr>
                    <tr>
                        <td id="left-table">
                            Quantity
                        </td>
                        <td id="right-table">
                            : {props.Quantity}
                        </td>
                    </tr>
                    <tr>
                        <td id="left-table">
                            Specific Type
                        </td>
                        <td id="right-table">
                            : {props.Type}
                        </td>
                    </tr>
                    <tr>
                        <td id="left-table">
                            Buyer name
                        </td>
                        <td id="right-table">
                            : {props.Buyer}
                        </td>
                    </tr>
                    <tr>
                        <td id="left-table">
                            Buyer Address
                        </td>
                        <td id="right-table">
                            : {props.Address}
                        </td>
                    </tr>
                </table>
            </div>
            <div id="right">
                <table id="left-content">
                        <tr>
                            <td id="left-table">
                                Pricings
                            </td>
                            <td id="right-table">
                                :  {props.Price} INR
                            </td>
                        </tr>
                </table>
                <div id="price-entry">
                    <h4 id="price-entry-title">
                        Enter the price
                    </h4>
                    <table id="price-entry-box">
                        <tr>
                            <td id="left-table">
                                <input type="number" id="price-input"
                                onChange={(e)=>{setPrice(e.target.value)}}>
                                </input>
                            </td>
                            <td id="right-table-inr">
                                INR
                            </td>
                        </tr>
                    </table>
                    <center>
                        <button id="price-submit" onClick={()=>{displayPrice();}}>
                            Submit
                        </button>
                    </center>
                </div>
            </div>
        </div>
        </>
    )
}

export default Negotiate;