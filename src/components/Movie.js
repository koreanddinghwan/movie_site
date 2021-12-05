import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({ id, title_long, medium_cover_image, genres, summary }) {
  return (
    <div className={style.Movie}>
      <img
        alt={title_long}
        className={style.Movie_img}
        src={medium_cover_image}
      ></img>
      <div>
        <h2>
          <Link to={`/movie/${id}`} className={style.Movie_title}>
            {title_long}
          </Link>
        </h2>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Movie;
