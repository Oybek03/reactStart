import React from "react";
import ReactDOM from "react-dom";

const App = function () {
  const text = "ismni kiriting";
  const styleForm = { color: "red", backgroundColor: "yellow" };
  return (
    <div>
      <label htmlFor="name">{text}</label>
      <input type={text} id="name" />
      <button style={styleForm}>Send</button>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
