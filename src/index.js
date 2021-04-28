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
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
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
        const { id, img, title, author } = book;
        return (
          <Book key={book.id} book={book}></Book>
        );
      })}
      {/* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Sit id elit ea aliqua aliqua consectetur occaecat adipisicing velit.
          Lorem ad qui irure quis amet labore adipisicing dolore mollit.
          Incididunt voluptate commodo nostrud laboris id ad id incididunt ut
          irure do occaecat ullamco laboris. Consectetur fugiat aliqua eiusmod
          voluptate adipisicing consectetur reprehenderit veniam consequat
          consectetur id ex.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>
          Veniam quis veniam esse culpa deserunt magna. Sit do excepteur culpa
          labore consequat. Elit irure aute et eiusmod deserunt Lorem nostrud
          nisi ullamco nulla. Mollit elit magna ex eiusmod nulla minim officia
          veniam. Eiusmod Lorem fugiat exercitation esse Lorem commodo mollit eu
          culpa ullamco eu do. Ipsum elit officia esse deserunt reprehenderit
          fugiat exercitation non ad amet. Labore exercitation tempor dolor
          nulla cillum minim cupidatat dolore qui commodo Lorem commodo.
        </p>
      </Book> */}
    </section>
  );
}

// Destructuring methods 1 and 2 
// method 1 - directly in parameters
// const Book = ({ img, title, author, children }) {

const Book = (props) => {
// method 2 - as VAR
  const { img, title, author, children } = props.book;

  console.log(props)
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>  
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
