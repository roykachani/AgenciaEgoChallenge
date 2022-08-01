import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './slider.module.css';

const Slider = ({ model }) => {
  return (
    <div className={styles.slider_container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1.4}
        breakpoints={{
          768: {
            slidesPerView: 2.1,
            spaceBetween: 30,
          },
        }}
        centeredSlides
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        watchOverflow
        // autoplayTimeout={5000}
        navigation
        pagination={{
          clickable: true,
        }}
        className={styles.sw_box}
      >
        {model?.model_features.map((info, i) => (
          <SwiperSlide key={i} className={styles.sw_sllider}>
            <div className={styles.slide_box}>
              <div className={styles.slider_image}>
                <Image
                  src={info.image}
                  alt={info.name}
                  width={300}
                  height={150}
                  priority={true}
                />
              </div>
              <div className={styles.slider_content}>
                <h3 className={styles.info_title}>{info.name}</h3>
                <span className={styles.info_description}>
                  {info.description}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
