import {
  GameSlide1,
  GameSlide2,
  GameSlide3,
  GameSlide4,
  GameSlide5,
} from "../../../../../public/images";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import styles from "./index.module.scss";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const GamesSlider = () => {
  return (
    <div className={styles.root}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        loopedSlides={2}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 23,
          slideShadows: true,
          stretch: 0,
          depth: 400,
          modifier: 1.9,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <>
          <SwiperSlide>
            <Link href="/detailedGame">
              <img src={GameSlide1.src} alt="slide" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/detailedGame">
              <img src={GameSlide2.src} alt="slide" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/detailedGame">
              <img src={GameSlide3.src} alt="slide" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/detailedGame">
              <img src={GameSlide4.src} alt="slide" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/detailedGame">
              <img src={GameSlide5.src} alt="slide" />
            </Link>
          </SwiperSlide>
        </>
      </Swiper>
    </div>
  );
};

export default GamesSlider;
