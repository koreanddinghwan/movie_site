import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data);
    console.log(json.data);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <h1>{loading ? "Loading..." : "Detail"}</h1>;
}
export default Detail;
