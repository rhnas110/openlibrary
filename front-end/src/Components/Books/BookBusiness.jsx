import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export const BookBusiness = () => {
  const business = useSelector((state) => state.booksSlice.thisBusiness);
  const { username } = useSelector((state) => state.usersSlice.value);

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

  const crossTitle = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };
  return (
    <div className="container py-3 px-4 justify-content-center bg-dark rounded">
      <div style={{ width: "12rem" }} className="mb-4">
        <div className="textsection">
          <h2 className="text-white">
            <span className="fw-semibold"></span> Business{" "}
          </h2>
        </div>
      </div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {business?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card
                className="p-0 overflow-hidden shadow"
                as={Link}
                to={`/getdetail/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="overflow-hidden p-0 rounded bg-light">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "16rem", backgroundSize: "cover" }}
                  />
                </div>
                <Card.Body className="text-black" style={{ height: "8rem" }}>
                  <Card.Title className="fw-semibold">
                    {crossTitle(item?.title, 15)}
                  </Card.Title>
                  <Card.Text>
                    <p style={{ opacity: ".5", fontStyle: "italic" }}>
                      {item.category}
                    </p>
                    <p>{item.author}</p>
                  </Card.Text>
                </Card.Body>
                <Button style={{ opacity: "0" }}>{"n"}</Button>
              </Card>
              <div
                style={{ zIndex: "10", position: "relative", top: "-3.3rem" }}
              >
                <Button
                  className="w-100 rounded-0"
                  variant="dark"
                  disabled={item.stocks === 0 ? true : false}
                  onClick={() => borrowBooks(item)}
                >
                  {item.stocks === 0 ? "Unavailable" : "Borrow"}
                </Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
