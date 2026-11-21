import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMovie(null);
    setError(false);
    get(`/movie/${movieId}`)
      .then((data) => setMovie(data))
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [movieId]);

  if (error) return <p className="message">No se encontró la película.</p>;
  if (!movie) return <p className="message">Cargando información...</p>;

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div>
      <Link to="/" className="back-link">← Volver al listado</Link>

      <div className="detailsContainer">
        <img src={imageUrl} alt={movie.title} className="movieImage" />

        <div className="movieDetails">
          <h2>{movie.title}</h2>
          <p>
            <strong>Géneros:</strong> {movie.genres?.map((g) => g.name).join(", ")}
          </p>
          <p>
            <strong>Fecha de estreno:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Descripción:</strong> {movie.overview || "Sin descripción disponible."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
