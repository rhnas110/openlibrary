import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { ThisNavbar } from "./Navbar";
import { BsDoorClosed } from "react-icons/bs";
import { Link } from "react-router-dom";

function BooksDetail() {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = `http://localhost:2000/books/getdetail/${id}`;

  const getBooks = async () => {
    setLoading(true);
    const response = await axios.get(url);
    console.log(response);
    setBooks(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const Loadingg = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
      </>
    );
  };

  const ShowBooks = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={books.image}
            alt={books.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <h4 className="text-uppercase text-black-50">{books.category}</h4>
            <Link
              to={"/books"}
              style={{
                textDecoration: "none",
                color: "red",
                transform: "scale(1.34)",
              }}
            >
              <BsDoorClosed />
            </Link>
          </div>
          <h1 className="display-5">{books.title}</h1>
          <p className="lead">Author : {books.author}</p>
          <p className="lead">Publisher : {books.publisher}</p>
          <h3 className="display-6 fw-bold my-4">
            Publish At {books.publishDate}
          </h3>
          <p className="lead">{books.abstract}</p>
          <p className="lead">Stock : {books.stocks}</p>
          <button className="btn btn-outline-dark ms-2 px-3 py-2">
            Borrow
          </button>
          <NavLink to="/" className="btn btn-outline-dark ms-2 px-3 py-2">
            Back To Home
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <ThisNavbar />
      <div className="container py-5">
        <div className="row py-5">{loading ? <Loadingg /> : <ShowBooks />}</div>
      </div>
    </div>
  );
}

export default BooksDetail;
