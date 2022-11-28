import React from 'react'
import PageN5 from "./pageN5";
import PageM4 from "./pageM4";
import PageM12 from "./pageM12";
import PageM1 from './pageM1';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageM12 />} />
          <Route path="/ordersummary" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
