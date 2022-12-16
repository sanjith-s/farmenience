import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage1 from './homepage1';
import Homepage2 from './homepage2';
import Signup from './signup';
import Login from './login';
import PageM1 from './pageM1';
import PageM3 from './pageM3';
import PageM4 from "./pageM4";
import PageM5 from "./pageM5";
import PageM6 from "./pageM6";
import PageM11 from "./pageM11";
import PageM17 from "./pageM17";
import PageM18 from "./pageM18";
import PageM19 from "./pageM19";
import PageN2 from './pageN2';
import PageN5 from "./pageN5";
import AllQueries from './N1'; 
import Navbar from './components/navbar';
import Footer from './components/footer';
import "./css/app.css";
import Headroom from "react-headroom";


function App() {
  return (
    <div>
      <Headroom>
        <Navbar />
      </Headroom>
      <main className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/M3" element={<PageM3 />} />
            <Route path="/M11" element={<PageM11 />} />
            <Route path="/M6" element={<PageM6 />} />
            <Route path="/M17" element={<PageM17 />} />
            <Route path="/M18" element={<PageM18 />} />
            <Route path="/M19" element={<PageM19 />} />
            <Route path="/ordersummary" />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
