import React from "react";
import { Button } from "react-bootstrap";

export const ThisFooter = () => {
  function ScrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <footer
        className="text-white pt-5 pb-0"
        style={{ backgroundColor: "#162F4B" }}
      >
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Open Library
              </h5>
              <p>
                Open Library is an initiative of the Internet Archive,
                non-profit, building a digital library of Internet sites and
                other cultural artifacts in digital form
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Books
              </h5>
              <p>
                <a
                  href="/books"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  All Books
                </a>
              </p>
              <p>
                <a
                  href="#books"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Search
                </a>
              </p>
              <p>
                <a
                  href="/support"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Be Contributors
                </a>
              </p>
            </div>
            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Your Account
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Become an Affiliates
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Shipping Rates
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Help
                </a>
              </p>
            </div> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i className="fas fa-home mr-3" />
                Jakarta, IDN
              </p>
              <p>
                <i className="fas fa-envelope mr-3" />
                openlibrary@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" />
                +69 696969
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p>
                Copyright ©{new Date().getFullYear()} All rights reserved by:{" "}
                <span style={{ textDecoration: "none" }}>
                  <strong className="text-warning">Open Library</strong>
                </span>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <span
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fab fa-facebook" />
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fab fa-twitter" />
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fab fa-google-plus" />
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fab fa-linkedin-in" />
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fab fa-youtube" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mb-0" />
          <div className="text-center p-3">
            <Button
              onClick={() => ScrollTop()}
              id="backbtn"
              variant="outline-light"
            >
              Back to Top
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};
