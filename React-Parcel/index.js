import React from "react";
import ReactDOM from "react-dom/client";

// <p>Hello React</p>
const paraElement = React.createElement("p",null,"Hello Worlds");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(paraElement)