import React from "react";
import ReactDom from "react-dom";
import './index.css'

// stateless functional component
// always return JSX

// book as object

const firstBook = {
  img: 
    "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
  title: "I Love You to the Moon and Back",
    author: 'Amelia Hepworth'
}


function BookList() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
    </section>
  );
}

// shift + option + A = comment out block of code

// arrow function with explicit return
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>  
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
