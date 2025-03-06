//TODO: 파일이름 대문자로 바꾸기..
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { SwiperClass } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
interface Props {
  swiperTitle: string;
  movies: string[];
}
const MovieSwiper = ({ swiperTitle, movies }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <section className="swiper">
      <h2 className="swiper__title">{swiperTitle}</h2>
      <div className="swiper__inner">
        <button onClick={handlePrev} className="swiper__btn-prev">
          <img
            src="/src/images/ico-leftarrow.svg"
            alt="Previous movie slide by one"
          />
        </button>
        <button onClick={handleNext} className="swiper__btn-next">
          <img
            src="/src/images/ico-rightarrow.svg"
            alt="Next movie slide by one"
          />
        </button>

        <Swiper
          className="main__swiper"
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween={30}
          slidesPerView={5}
          onSwiper={(e) => setSwiper(e)}
          breakpoints={{
            769: {
              centeredSlides: false,
              slidesPerView: 5,
              slidesPerGroup: 1,
              spaceBetween: 40,
            },
          }}
          navigation
          modules={[Navigation]}
        >
          {movies.map((movie) => (
            <SwiperSlide>{movie}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default MovieSwiper;
