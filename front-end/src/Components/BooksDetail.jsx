import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { ThisNavbar } from "./Navbar";
import { BsDoorClosed } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function BooksDetail() {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { username } = useSelector((state) => state.usersSlice.value);
  const url = `http://localhost:2000/books/getdetail/${id}`;

  const getBooks = async () => {
    setLoading(true);
    const response = await axios.get(url);
    console.log(response);
    setBooks(response.data);
    setLoading(false);
  };

  const borrowBooks = (value) => {
    try {
      if (!username) {
        // return alert("Login Ya, Biar Nama Lu Di Panggil");
        return swal({
          title: "Login first",
          // text: "You clicked the button!",
          icon: "error",
          button: "Oke",
        });
      } else if (username) {
        return alert(`Halo ${username} Salam Literasi!`);
      }
      // console.log(value.title);
    } catch (error) {
      console.log(error);
    }
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
          <button
            className="btn btn-outline-dark ms-2 px-3 py-2"
            disabled={books.stocks === 0 ? true : false}
            onClick={() => borrowBooks(books)}
          >
            {books.stocks === 0 ? "Unavailable" : "Borrow"}
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
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "-10",
        }}
      ></div>
      <div className="container py-5">
        <div className="row py-5">{loading ? <Loadingg /> : <ShowBooks />}</div>
      </div>
    </div>
  );
}

export default BooksDetail;
