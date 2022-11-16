import React from "react";
import { ThisNavbar } from "../Components/Navbar";
import { ThisFooter } from "../Components/Footer";
import { Home } from "../Components/Home";
import Carousel from "react-bootstrap/Carousel";

export const ThisHome = () => {
  return (
    <div>
      <div className="fixed-top text-white">
        <ThisNavbar />
      </div>

      <div>
        <Carousel>
          <Carousel.Item interval={1000} style={{ height: "100vh" }}>
            <img
              className="d-block w-100"
              src="https://images2.alphacoders.com/104/1042582.jpg"
              alt="First"
              style={{ backgroundSize: "cover" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={1000}
            style={{ height: "91vh", backgroundSize: "cover" }}
          >
            <img
              className="d-block w-100"
              src="https://dataindonesia.id/media-images/1657159790627_89_Perpustakaan.jpg"
              alt="Second"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} style={{ height: "100vh" }}>
            <img
              className="d-block w-100"
              src="https://c4.wallpaperflare.com/wallpaper/767/594/322/books-library-bokeh-depth-of-field-wallpaper-preview.jpg"
              alt="Third"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} style={{ height: "91vh" }}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1549383028-df014fa3a325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="Fourth"
            />
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="bg-purple">
        <Home />
      </div>
      <div>
        <ThisFooter />
      </div>
    </div>
  );
};
