import "swiper/css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
            <img src="/assets/static/banner1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] w-full">
            <img src="/assets/static/banner2.png" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
