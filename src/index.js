import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div>
      <Person /> 
      <Message />
    </div>
  );
}


// implicit return
const Person = () => <h2> this is a paragraph</h2>

// explicit return 
const Message = () => {
  return (
    <p>this is a message</p>
  )
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world!")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
