import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/app.css";
import Headroom from "react-headroom";
import Homepage1 from "./GeneralPages/homepage1";
import Homepage2 from "./GeneralPages/homepage2";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Signup from "./GeneralPages/signup";
import Chart from "./components/chart";
import Login from "./GeneralPages/login";
import PageM1 from "./MPages/pageM1";
import PageM2 from "./MPages/pageM2";
import PageM3 from "./MPages/pageM3";
import PageM4 from "./MPages/pageM4";
import PageM5 from "./MPages/pageM5";
import PageM6 from "./MPages/pageM6";
import PageM7 from "./MPages/pageM7";
import PageM9 from "./MPages/pageM9";
import PageM10 from "./MPages/pageM10";
import PageM10a from "./MPages/pageM10a";
import PageM10b from "./MPages/pageM10b";
import PageM10c from "./MPages/pageM10c";
import PageM11 from "./MPages/pageM11";
import PageM12 from "./MPages/pageM12";
import PageM13 from "./MPages/pageM13";
import PageM15 from "./MPages/pageM15";
import PageM16 from "./MPages/pageM16";
import PageM17 from "./MPages/pageM17";
import PageM18 from "./MPages/pageM18";
import PageM19 from "./MPages/pageM19";
//import AllQueries from "./N1";
import PageN1 from "./NPages/pageN1";
import PageN2 from "./NPages/pageN2a";
import PageN4 from "./NPages/pageN4";
import PageN5 from "./NPages/pageN5";
import PageN6 from "./NPages/pageN6";
import PageN7 from "./NPages/pageN7";
import PageN9 from "./NPages/pageN9";
import PageN12 from "./NPages/pageN12";
import PageN12a from "./NPages/pageN12a";
import PageN14 from "./NPages/pageN14";
import PageN14a from "./NPages/pageN14a";
import PageN14b from "./NPages/pageN14b";
import CropRecommendation from "./cropRecommendation";
import LogoutAllDevice from "./LogoutAllDevice";

function App() {
  return (
    <div>
      <Headroom>
        <Navbar />
      </Headroom>
      <main className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage1 />} />
            <Route path="/homepage2" element={<Homepage2 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/M1" element={<PageM1 />} />
            <Route path="/M3" element={<PageM3 />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/M4" element={<PageM4 />} />
            <Route path="/M5" element={<PageM5 />} />
            <Route path="/M6" element={<PageM6 />} />
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
            <Route path="/M2" element={<PageM2 />} />
            <Route path="/M7" element={<PageM7 />} />
            <Route path="/N1" element={<PageN1 />} />
            <Route path="/N2" element={<PageN2 />} />
            <Route path="/N4" element={<PageN4 />} />
            <Route path="/N5" element={<PageN5 />} />
            <Route path="/N6" element={<PageN6 />} />
            <Route path="/N7" element={<PageN7 />} />
            <Route path="/N9" element={<PageN9 />} />
            <Route path="/N12" element={<PageN12 />} />
            <Route path="/N12a" element={<PageN12a />} />
            <Route path="/N14" element={<PageN14 />} />
            <Route path="/N14a" element={<PageN14a />} />
            <Route path="/N14b" element={<PageN14b />} />
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
