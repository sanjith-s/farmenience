import React from 'react'
import './css/M7.css'

const PageM7 = () => {
  return (
    <>
    <br/>  
    <div className='flex-container'>  
        <div>  
        <div className='title-bar'>
            You are in a Confirmation Page
        </div>
        <br></br>
        <br/> 
        <div className='item-list'>
            <div>
            <br/>
                <table>
                    <tr>
                        <th>Sno</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price per kg</th>
                        <th>Price</th>
                    </tr>
                        <td>place</td>
                        <td>place</td>
                        <td>place</td>
                        <td>place</td>
                        <td>place</td>
                </table>
            </div>
            <br/>
            <div>
                <div className='amt'>Total amount : 2000 Rs </div>
            </div>
        </div>
        </div>
        <div className='part-2'>
        <div className='img-show'>
        {/* <img src={process.env.PUBLIC_URL + '/image1.jpg'} alt="Hi"></img> */}
        </div>
        <div style={{alignItems: "center"}}>
            <button className='btn'>BACK</button>
            <button className='btn'>CONFIRM</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default PageM7