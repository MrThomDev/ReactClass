import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//React needs to know where to render the React app. To do this we need to decide where in the dom we will put it. Typically you have a an empty <div></dive> set aside for this. We can target this div by assigning it an ID, like an ID of "root". We then use the document.getElementById method to grab that div. We let React know that is the root of our React app by useing the ReactDom.createRoot method. We assign this to a variable, root, to call methods on it.
const root = ReactDOM.createRoot(document.getElementById("root"));
//We then call the .render method on the root and pass in JSX (A type of JavaScript that has been extended to include a syntax that looks and behaves like HTML) to the .render method to tell React how to render our app.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
