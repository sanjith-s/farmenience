import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/app.css";
import Headroom from "react-headroom";
import Homepage1 from "./homepage1";
import Homepage2 from "./homepage2";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Signup from "./signup";
import Login from "./login";
import PageM1 from "./pageM1";
import PageM2 from "./pageM2";
import PageM3 from "./pageM3";
import PageM4 from "./pageM4";
import PageM5 from "./pageM5";
import PageM6 from "./pageM6";
import PageM7 from "./pageM7";
import PageM9 from "./pageM9";
import PageM10 from "./pageM10";
import PageM10a from "./pageM10a";
import PageM10b from "./pageM10b";
import PageM10c from "./pageM10c";
import PageM11 from "./pageM11";
import PageM12 from "./pageM12";
import PageM15 from "./pageM15";
import PageM16 from "./pageM16";
import PageM17 from "./pageM17";
import PageM18 from "./pageM18";
import PageM19 from "./pageM19";
//import AllQueries from "./N1";
import PageN1 from "./pageN1";
import PageN2 from "./pageN2a";
import PageN4 from "./pageN4";
import PageN5 from "./pageN5";
import PageN7 from "./pageN7";
import PageN9 from "./pageN9";
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
            <Route path="/M15" element={<PageM15 />} />
            <Route path="/M16" element={<PageM16 />} />
            <Route path="/M17" element={<PageM17 />} />
            <Route path="/M18" element={<PageM18 />} />
            <Route path="/M19" element={<PageM19 />} />
            <Route path="/M2" element={<PageM2 />} />
            <Route path="/M7" element={<PageM7 />} />
            <Route path="/N1" element={<PageN1 />} />
            <Route path="/N2a" element={<PageN2 />} />
            <Route path="/logoutAll" element={<LogoutAllDevice />} />
            <Route path="/N4" element={<PageN4 />} />
            <Route path="/N5" element={<PageN5 />} />
            <Route path="/N7" element={<PageN7 />} />
            <Route path="/N9" element={<PageN9 />} />
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
