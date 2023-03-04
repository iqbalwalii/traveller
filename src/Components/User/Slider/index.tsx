import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./slider.module.sass";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.image__container}>
          <Image
            className={styles.image}
            width={3000}
            height={500}
            quality={100}
            alt="image"
            src="/assets/images/3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.image__container}>
          <Image
            className={styles.image}
            width={3000}
            height={500}
            quality={100}
            alt="image"
            src="/assets/images/1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.image__container}>
          <Image
            className={styles.image}
            width={3000}
            height={500}
            quality={100}
            alt="image"
            src="/assets/images/2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.image__container}>
          <Image
            className={styles.image}
            width={3000}
            height={500}
            quality={100}
            alt="image"
            src="/assets/images/4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.image__container}>
          <Image
            className={styles.image}
            width={3000}
            height={500}
            quality={100}
            alt="image"
            src="/assets/images/5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.image__container}>
          <Image
            className={styles.image}
            width={3000}
            height={500}
            quality={100}
            alt="image"
            src="/assets/images/6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.image__container}>
          <Image
            className={styles.image}
            width={3000}
            height={500}
            quality={100}
            alt="image"
            src="/assets/images/7.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
