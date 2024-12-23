import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavoriteClick() {
    console.log("Fav Button");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie_overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ❤
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
