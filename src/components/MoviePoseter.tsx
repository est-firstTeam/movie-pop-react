import { NO_DATA_SIGN } from "../constant/constant";
import { SyntheticEvent } from "react";
interface Props {
  movieTitle: string;
  posterUrl: string;
}
// TODO: 작동 확인 필요
const MoviePoster = ({ movieTitle, posterUrl }: Props) => {
  const defaultImg = "../images/img_noImg.png";

  const addDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImg;
  };
  return (
    <img
      src={posterUrl === NO_DATA_SIGN ? defaultImg : posterUrl}
      alt={movieTitle}
      onError={addDefaultImg}
    ></img>
  );
};
export default MoviePoster;
