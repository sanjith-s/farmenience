import React, { useEffect } from "react";
import Swal from 'sweetalert2';
import "./css/style.css";
import "./css/queries.css";
import "./css/general.css";
import { Button } from "@mui/material";
import abtImg1 from "./images/illustrations/abtImg-1.png";
import abtImg2 from "./images/illustrations/abtImg-2.png";
import abtImg3 from "./images/illustrations/abtImg-3.png";
import abtImg4 from "./images/illustrations/abtImg-4.jpg";
import abtImg5 from "./images/illustrations/abtImg-5.jpg";
import farmsvg from "./images/farmenience.svg";
import farmjpeg from "./images/farmenience.jpeg";

const AboutUsPage = () => {
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  // }

  // const fullAnotherSpeak = (text) => {
  //   responsiveVoice.speak(text, "Tamil Male");
  // }

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
  //   document.body.appendChild(addScript);
  // }, []);

  return (
    <div className="about-hero ">
      <img className="abt-img " src={abtImg5} alt="" />

      <main className="about-section gradient" onClick={(e) => {
        fullAnotherSpeak(e.target.innerText)
      }}>
        <section>
          <div id="google_translate_element">

            <div className="gx-d-flex justify-content-center" style={{ position: "relative" }}>
              <h1 className="heading-primary" style={{ textAlign: "center", color: "#000", fontWeight: "37.5rem", marginBottom: "5rem" }}>
                About Farmenience
              </h1>
              {/* <img src={farmsvg} alt="" style={{ height: "140px", objectFit: "cover", position: "absolute", left: "42%", top: "30px" }} /> */}
            </div>

            <p className="about-description indent">
              <span style={{ fontSize: "2.5rem" }}>A</span>griculture is the backbone of the Indian Economy’- Mahatma Gandhi. 54.6% of the total workforce is engaged in agriculture and allied sector activities (Census 2011) and accounts for 18.8% (First Advance Estimates) of country's Gross Value Added (GVA) for the year 2021-22 (at current prices).  The resource rich country is yet to be revolutionised by the modern technology. The Farmenience website aims to provide assistance to the farming community to make best use of their resources to grow in a sustainable manner. Farmenience aims to help India to remain an agriculturally dependent economy in the long run. The website makes use of efficient machine learning techniques to predict and provide the farmers the best profitable crop for specific terrain. It acts as a bridge between producers and clients and reduces the intermediate fee by a large factor which in turn benefits the farming community in profit. It acts as a portal which carries the queries of farmers to concerned NGO’s which provides them with guidance.
            </p>

            <p className="about-description">
              This website is mainly divided into 2 sections.

            </p>

            <p className="about-description points">
              1.	A professional network component where farm owners can post jobs as per their requirements and the workmen who can accept jobs as per their needs and convenience.

            </p>

            <p className="about-description points">
              2.	A component through which retailers can connect to farmers to buy produce as per their needs. And on the other side, farmers can connect to retailers to sell their produce as per their produce and profitability.
            </p>

          </div>
        </section>

       

      </main>

    </div>
  );
};

export default AboutUsPage;
