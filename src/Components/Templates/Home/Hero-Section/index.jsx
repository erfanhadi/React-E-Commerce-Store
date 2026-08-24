import "swiper/css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderButtons from "./Fragments/SliderButtons"

const HeroSection = () => {
  return (
    <section className="w-full h-[400px]">
      <Swiper
        loop
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 1500 }}
        className="mySwiper h-[400px] relative"
      >
        <SwiperSlide>
          <div className="h-[400px] w-full">
            <img src="/assets/static/banner1.png" className="size-full! object-cover!" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] w-full">
            <img src="/assets/static/banner2.png" className="size-full! object-cover!" />
          </div>
        </SwiperSlide>
        <SliderButtons />
      </Swiper>
    </section>
  );
};

export default HeroSection;
