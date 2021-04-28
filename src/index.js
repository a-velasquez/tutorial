import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div>
      <h2>This is another component!</h2>
    </div>
  );
}

// 
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world!")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
