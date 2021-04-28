// Destructuring methods 1 and 2
// method 1 - directly in parameters
// const Book = ({ img, title, author, children }) {
import React from 'react';

const Book = ({ img, title, author }) => {
  
  const clickHandler = (e) => {
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  console.log(title);
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      {/* inline function */}
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h4>{author}</h4>
      {/* reference to function */}
      <button onClick={clickHandler}>Reference Example</button>
      {/* when passing args must invoke function as arrow function */}
      <button onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

export default Book;
