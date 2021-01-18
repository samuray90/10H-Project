import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91VcSyl-0DL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h3>Ion Creanga</h3>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
