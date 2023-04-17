import React from 'react';

function Fname() {
	return <div className="pay">
		<div className="options">
			<div className="radio-btn"><input type="radio" name="pay-choice" className="radio"/><span>UPI</span></div>
			<div className="radio-btn"><input type="radio" name="pay-choice" className="radio"/><span>Credit / Debit card</span></div>
			<div className="radio-btn"><input type="radio" name="pay-choice" className="radio"/><span>Wallet / Postpaid</span></div>
			<div className="radio-btn"><input type="radio" name="pay-choice" className="radio"/><span>Net Banking</span></div>
			<div className="radio-btn"><input type="radio" name="pay-choice" className="radio"/><span>Cash On Delivery</span></div>
		</div><br />
		<div className="next-row">
			<div><h1>Price Details</h1></div><br />
			<div>
			<tr><td><h1>Amount Payable : Rs. 2000</h1></td></tr>
			</div><br />
			<div><button className="order-btn">Continue</button></div>
		</div>
	</div>
}
export default Fname;