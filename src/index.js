import React from "react";
import ReactDom from "react-dom";
import './index.css'
// .js not needed because ./books.js is a js file
import { books } from './books'
import { Book } from './Book'

// stateless functional component
function BookList() {
  // always return JSX
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
