import React from "react";
import ReactDom from "react-dom";
import './index.css'

// books as objects
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51Ix49rxgtL._SY414_BO1,204,203,200_.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/41ThX3SfAiL.jpg",
    title: "The Vanishing Half: A Novel",
    author: "Brit Bennett",
  },
];


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

// Destructuring methods 1 and 2 
// method 1 - directly in parameters
// const Book = ({ img, title, author, children }) {

const Book = (props) => {
  // atribute, eventHandler
  // onClick, onMouseOver

  // method 2 - as VAR
  const { img, title, author } = props;

  const clickHandler = (e) => {
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  console.log(props);
  return (
    <article
      className="book"
      onMouseOver={()=>{
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

ReactDom.render(<BookList />, document.getElementById("root"));
