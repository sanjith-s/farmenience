import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import App1 from "./App1";

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<App />);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<App1 />);
