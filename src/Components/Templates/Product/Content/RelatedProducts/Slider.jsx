import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ProductCard from "../../../../Common/Cards/ProductCard";

import "swiper/css";

const Slider = () => {
  return (
    <div id="related-products-slider">
      <Swiper
        autoplay={{
            delay: 2500
        }}
        loop
        modules={[Autoplay]}
        slidesPerView={2}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {Array.from({ length: 10 }).map((product, id) => (
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
