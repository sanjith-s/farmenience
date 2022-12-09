import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PageM1 from './pageM1';
import PageM3 from './pageM3';
import PageM4 from "./pageM4";
import PageM5 from "./pageM5";
import PageM12 from "./pageM12";
import PageM17 from "./pageM17";
import PageN5 from "./pageN5";
import PageM11 from "./pageM11";
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/M11" element={<PageM11/>} />
          <Route path="/M17" element={<PageM17 />} />
          <Route path="/ordersummary" />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
