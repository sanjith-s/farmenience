import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import '../css/footer.css';
// import FacebookLogo from "https://p.kindpng.com/picc/s/16-167851_rageon-logo-facebook-logo-white-transparent-background-hd.png";
function Footer() {
	return (
	<div className="foot">
     <div className="foot-body">
        <div className="foot-items"><a href="#" className="foot-links">Contact us</a></div>
        <div className="foot-items"><a href="#" className="foot-links">Privacy Policy</a></div>
        <div className="foot-items"><a href="#" className="foot-links">Terms and Conditions</a></div>
        <div className="foot-items"><a href="#" className="foot-links">Copyright</a></div>
     </div>
     <div className="foot-tail">
        <div className="foot-items-logo"><a href="#" className="foot-links"><TwitterIcon fontSize="large"/></a></div>
        <div className="foot-items-logo"><a href="#" className="foot-links"><FacebookOutlinedIcon fontSize="large"/></a></div>
        <div className="foot-items-logo"><a href="#" className="foot-links"><LocalPhoneOutlinedIcon fontSize="large"/></a></div>
    </div>
     </div>
	)
}
export default Footer;