import React from "react";
import ReactDom from "react-dom";
import './index.css'

// stateless functional component
// always return JSX

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}


// arrow function with implicit return
const Book = () => {
  return <article className='book'>
    <Title />
    <Image />
    <Author />
  </article>
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg" alt="" />

const Title = () => <h1>I Love You to the Moon and Back</h1>

const Author = () => <h4>Amelia Hepworth</h4> 

ReactDom.render(<BookList />, document.getElementById("root"));
