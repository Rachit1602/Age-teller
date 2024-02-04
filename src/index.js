import React from "react";
import ReactDOM from "react-dom/client";
//component
import App from './App';

//old way
// ReactDOM.render(
//     <div>AgeTeller</div>,document.getElementById("root")
//     <App/>
// )

//new way
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)