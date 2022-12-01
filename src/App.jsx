import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageM1 from "./pageM1";
import PageM3 from "./pageM3";
import PageM4 from "./pageM4";
import PageM5 from "./pageM5";
import PageM15 from "./pageM15";
import PageM12 from "./pageM12";
import PageN5 from "./pageN5";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<PageM1 />} />
          <Route path="/ordersummary" />
        </Routes>
        <Routes>
          <Route path="/" element={<PageM3 />} />
          <Route path="/ordersummary" />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<PageM4 />} />
          <Route path="/ordersummary" />
        </Routes> */}
        {/* <Routes>
          <Route path="/" element={<PageM5 />} />
          <Route path="/ordersummary" />
        </Routes> */}
        <Routes>
=======
          <Route path="/" element={<PageM15 />} />
          <Route path="/ordersummary" />
        </Routes>
        <Routes>
>>>>>>> yuvaraj
          <Route path="/" element={<PageM12 />} />
          <Route path="/ordersummary" />
        </Routes>
        <Routes>
          <Route path="/" element={<PageN5 />} />
          <Route path="/ordersummary" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
