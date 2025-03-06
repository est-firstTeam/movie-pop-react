import MovieSwiper from "../components/swiper";
// TODO: 영화 데이터로 대체 예정
const movies = [
  "Slide1",
  "Slide2",
  "Slide3",
  "Slide4",
  "Slide5",
  "Slide6",
  "Slide7",
  "Slide8",
  "Slide9",
  "Slide10",
  "Slide11",
  "Slide12",
  "Slide13",
];
const Main = () => {
  return <MovieSwiper swiperTitle="NEW" movies={movies} />;
};
export default Main;
