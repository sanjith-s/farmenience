import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/app.css";
import Headroom from "react-headroom";
import Homepage1 from "./homepage1";
import Homepage2 from "./homepage2";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Signup from "./signup";
import Chart from "./components/chart";
import Login from "./login";
import PageM0 from "./Market/pageM0";
import PageM1 from "./Market/pageM1";
import PageM2 from "./Market/pageM2";
import PageM3 from "./Market/pageM3";
import PageM4 from "./Market/pageM4";
import PageM5 from "./Market/pageM5";
import PageM6 from "./Market/pageM6";
import PageM7 from "./Market/pageM7";
import PageM9 from "./Market/pageM9";
import PageM10 from "./Market/pageM10";
import PageM10a from "./Market/pageM10a";
import PageM10b from "./Market/pageM10b";
import PageM10c from "./Market/pageM10c";
import PageM11 from "./Market/pageM11";
import PageM12 from "./Market/pageM12";
import PageM13 from "./Market/pageM13";
import PageM15 from "./Market/pageM15";
import PageM16 from "./Market/pageM16";
import PageM17 from "./Market/pageM17";
import PageM18 from "./Market/pageM18";
import PageM19 from "./Market/pageM19";
//import AllQueries from "./N1";
import PageN1 from "./Ngo/pageN1";
import PageN2 from "./Ngo/pageN2a";
import PageN4 from "./Ngo/pageN4";
import PageN5 from "./Ngo/pageN5";
import PageN6 from "./Ngo/pageN6";
import PageN7 from "./Ngo/pageN7";
import PageN9 from "./Ngo/pageN9";
import PageN10 from "./Ngo/pageN10";
import PageN11 from "./Ngo/pageN11";
import PageN12 from "./Ngo/pageN12";
import PageN12a from "./Ngo/pageN12a";
import PageN13 from "./Ngo/pageN13";
import PageN14 from "./Ngo/pageN14";
import PageN14a from "./Ngo/pageN14a";
import PageN14b from "./Ngo/pageN14b";
import Calender from "./components/calender";
import CropRecommendation from "./cropRecommendation";
import LogoutAllDevice from "./LogoutAllDevice";
import N10Navbar from "./components/n10Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <N10Navbar/> */}
      <main className="main-content" style={{ marginTop: "2%" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage1 />} />
            <Route path="/homepage2" element={<Homepage2 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/M0" element={<PageM0 />} />
            <Route path="/M1" element={<PageM1 />} />
            <Route path="/M2" element={<PageM2 />} />
            <Route path="/M3" element={<PageM3 />} />
            <Route path="/M4" element={<PageM4 />} />
            <Route path="/M5" element={<PageM5 />} />
            <Route path="/M6" element={<PageM6 />} />
            <Route path="/M7" element={<PageM7 />} />
            <Route path="/M9" element={<PageM9 />} />
            <Route path="/M10" element={<PageM10 />} />
            <Route path="/M10a" element={<PageM10a />} />
            <Route path="/M10b" element={<PageM10b />} />
            <Route path="/M10c" element={<PageM10c />} />
            <Route path="/M11" element={<PageM11 />} />
            <Route path="/M12" element={<PageM12 />} />
            <Route path="/M13" element={<PageM13 />} />
            <Route path="/M15" element={<PageM15 />} />
            <Route path="/M16" element={<PageM16 />} />
            <Route path="/M17" element={<PageM17 />} />
            <Route path="/M18" element={<PageM18 />} />
            <Route path="/M19" element={<PageM19 />} />
            <Route path="/N1" element={<PageN1 />} />
            <Route path="/N2" element={<PageN2 />} />
            <Route path="/N4" element={<PageN4 />} />
            <Route path="/N5" element={<PageN5 />} />
            <Route path="/N6" element={<PageN6 />} />
            <Route path="/N7" element={<PageN7 />} />
            <Route path="/N9" element={<PageN9 />} />
            <Route path="/N10" element={<PageN10 />} />
            <Route path="/N11" element={<PageN11 />} />
            {/* <Route path="/N12" element={<PageN12 />} /> */}
            <Route path="/N12a" element={<PageN12a />} />
            <Route path="/N13" element={<PageN13 />} />
            <Route path="/N14" element={<PageN14 />} />
            <Route path="/N14a" element={<PageN14a />} />
            <Route path="/N14b" element={<PageN14b />} />
            <Route path="/cal" element={<Calender />} />
            <Route path="/logoutAll" element={<LogoutAllDevice />} />
            <Route
              path="/cropRecommendation"
              element={<CropRecommendation />}
            />
            <Route path="/ordersummary" />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
