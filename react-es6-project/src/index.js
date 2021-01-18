import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title.toUpperCase()}
        author={firstBook.author}
      />
      {/* <Book {...firstBook} />  it works fine but has the same components*/}
      <Book
        img={secondBook.img}
        title={secondBook.title.toUpperCase()}
        author={secondBook.author}
      />
    </section>
  );
}

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91VcSyl-0DL._AC_UL200_SR200,200_.jpg",
  title: "ninsoarea",
  author: "Ion reanga",
};
const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/610O4MLOT2L._AC_UL200_SR200,200_.jpg",
  title: "second title",
  author: "Eminescu",
};

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
