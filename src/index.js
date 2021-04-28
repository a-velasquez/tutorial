import React from "react";
import ReactDom from "react-dom";
import './index.css'

// stateless functional component
// always return JSX

//VARS
const author = "Amelia Hepworth";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg";
const title = "I Love You to the Moon and Back";

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// shift + option + A = comment out block of code

// arrow function with explicit return
const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>  
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
