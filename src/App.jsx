import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PageM1 from './pageM1';
import PageM3 from './pageM3';
import PageM4 from "./pageM4";
import PageM5 from "./pageM5";
import PageM12 from "./pageM12";
import PageN5 from "./pageN5";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageN5 />} />
          <Route path="/ordersummary" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
