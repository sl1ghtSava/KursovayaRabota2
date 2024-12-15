import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
export const MySlider = () => {
  const slides = [
    {
      id: 1,
      image: require("./slide_1.jpg"),
    },
    {
      id: 2,
      image: require("./slide_2.jpg"),
    },
    {
      id: 3,
      image: require("./slide_3.jpg"),
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide) => {
        return (
          <div className="item" key={slide.id}>
            <div
              class="itemImage"
              style={{
                width: "100%",
                backgroundImage: "url(" + slide.image + ")",
                backgroundSize: "cover",
              }}
            >
              <div className="text"></div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
