import { Mousewheel, Navigation, Thumbs } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
// import "swiper/css/navigation";
import { useState } from "react";

const slides = [
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1081",
  "https://picsum.photos/1920/1082",
  "https://picsum.photos/1920/1083",
  "https://picsum.photos/1920/1084",
];

const RandomProduct = () => {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
    <section className="slider">
      <div className="slider__flex">
        <div className="slider__col">
          <div className="slider__prev">
            <div className="swiper-button-prev"></div>
          </div>

          <div className="slider__thumbs">
            <Swiper
              loop={true}
              onSwiper={setImagesNavSlider}
              direction="horizontal"
              spaceBetween={10}
              centeredSlides={true}
              slidesPerView={3}
              navigation={{
                nextEl: ".slider__next",
                prevEl: ".slider__prev",
              }}
              className="swiper-container1"
              breakpoints={{
                0: {
                  direction: "horizontal",
                },
                768: {
                  direction: "vertical",
                },
              }}
              modules={[Navigation, Thumbs]}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="slider__image">
                      <img src={slide} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="slider__next">
            <div className="swiper-button-next"></div>
          </div>
        </div>

        <div className="slider__images">
          <Swiper
            loop={true}
            thumbs={{ swiper: imagesNavSlider }}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            navigation={{
              nextEl: ".slider__next",
              prevEl: ".slider__prev",
            }}
            breakpoints={{
              0: {
                direction: "vertical",
              },
              768: {
                direction: "horizontal",
              },
            }}
            className="swiper-container2"
            modules={[Navigation, Thumbs, Mousewheel]}
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="slider__image">
                    <img src={slide} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RandomProduct;
