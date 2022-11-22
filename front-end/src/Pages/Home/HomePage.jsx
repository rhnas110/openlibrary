import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ThisNavbar } from "../../Components/Navbar";
import { ThisFooter } from "../../Components/Footer";
import { Home } from "../../Components/Home";

import "./home.css";

export const ThisHome = () => {
  return (
    <div>
      <div className="text-white">
        <ThisNavbar />
      </div>

      <div>
        <Carousel className="main-text">
          <Carousel.Item style={{ height: "91vh" }}>
            <img
              className="d-block w-100"
              src="https://images2.alphacoders.com/104/1042582.jpg"
              alt="First"
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "35vh",
              }}
            >
              <h3
                className="mb-4"
                style={{
                  textShadow: "4px 3px 2px rgba(12, 23, 34, .99)",
                  fontSize: "3rem",
                }}
              >
                WELCOME TO OPEN LIBRARY
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "81vh" }}>
            <img
              className="d-block w-100"
              src="https://dataindonesia.id/media-images/1657159790627_89_Perpustakaan.jpg"
              alt="Second"
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "35vh",
              }}
            >
              <h3
                className="mb-4"
                style={{
                  textShadow: "4px 3px 2px rgba(12, 23, 34, .99)",
                  fontSize: "2.4rem",
                }}
              >
                ACCESS E-BOOKS AND E-JOURNALS FROM HOME FOR FREE
              </h3>
              <Button
                variant="outline-light"
                style={{
                  boxShadow: "3px 3px 1px rgba(1, 2, 3, .44)",
                }}
                href="#books"
              >
                READ NOW
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "91vh" }}>
            <img
              className="d-block w-100"
              src="https://c4.wallpaperflare.com/wallpaper/767/594/322/books-library-bokeh-depth-of-field-wallpaper-preview.jpg"
              alt="Third"
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "35vh",
                textShadow: "4px 3px 2px rgba(12, 23, 34, .99)",
                fontSize: "2.4rem",
              }}
            >
              <h3
                style={{
                  textShadow: "4px 3px 2px rgba(12, 23, 34, .99)",
                  fontSize: "2.4rem",
                }}
              >
                LIBRARY OPENED
              </h3>
              <p>Library opened On November 11, 2022</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "81vh" }}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1549383028-df014fa3a325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="Fourth"
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "35vh",
              }}
            >
              <h3
                className="mb-4"
                style={{
                  textShadow: "4px 3px 2px rgba(12, 23, 34, .99)",
                  fontSize: "2.4rem",
                }}
              >
                START MEMBERSHIP AND START READING, ENJOY
              </h3>
              <Button
                variant="outline-light"
                style={{
                  boxShadow: "3px 3px 1px rgba(1, 2, 3, .44)",
                }}
                as={Link}
                to={"/register"}
              >
                JOIN NOW
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div id="books" style={{ backgroundColor: "rgba(44, 44, 44,.69)" }}>
        <Home />
      </div>

      <div>
        <ThisFooter />
      </div>
    </div>
  );
};
