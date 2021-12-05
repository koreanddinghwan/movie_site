import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import style from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div className={style.container}>
      {loading ? (
        <div className={style.loader}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={style.movies}>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              title_long={movie.title_long}
              medium_cover_image={movie.medium_cover_image}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
