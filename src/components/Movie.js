import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title_long, medium_cover_image, genres, summary }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title_long}</Link>
      </h2>
      <img alt={title_long} src={medium_cover_image}></img>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
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
