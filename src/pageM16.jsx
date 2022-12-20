import './css/pageM16.css'
import { useState } from 'react'

const PageM16 = () => {
    const [price,setPrice]=useState(0);
    let content=[
        {
            'Name': 'Product 1',
            'Quantity': 24,
            'Type': 'Type 1',
            'Buyer': 'Harshit',
            'Address': 'Chennai',
            'Price': 123456789
        },
        {
            'Name': 'Product 2',
            'Quantity': 40,
            'Type': 'Type 2',
            'Buyer': 'Sanjith',
            'Address': 'Chennai',
            'Price': 425456789
        }
    ]
    return (
        <>
            <h3 id="title">
                Negotiate Prices
            </h3>
            {content.map((id,key)=>{
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
                                        : {id.Name}
                                    </td>
                                </tr>
                                <tr>
                                    <td id="left-table">
                                        Quantity
                                    </td>
                                    <td id="right-table">
                                        : {id.Quantity}
                                    </td>
                                </tr>
                                <tr>
                                    <td id="left-table">
                                        Specific Type
                                    </td>
                                    <td id="right-table">
                                        : {id.Type}
                                    </td>
                                </tr>
                                <tr>
                                    <td id="left-table">
                                        Buyer name
                                    </td>
                                    <td id="right-table">
                                        : {id.Buyer}
                                    </td>
                                </tr>
                                <tr>
                                    <td id="left-table">
                                        Buyer Address
                                    </td>
                                    <td id="right-table">
                                        : {id.Address}
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
                                            :  {id.Price} INR
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
                                            onChange={(e)=>{setPrice(e.target.value)}}
                                            >
                                            </input>
                                        </td>
                                        <td id="right-table-inr">
                                            INR
                                        </td>
                                    </tr>
                                </table>
                                <center>
                                    <button id="price-submit">
                                        Submit
                                    </button>
                                </center>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}

        </>
    )
}

export default PageM16