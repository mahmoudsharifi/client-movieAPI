export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      style={{
        fontSize: '20px',
      }}
      onClick={() => {
        onMovieClick(movie)
      }}
    >
      {movie.Title}
    </div>
  )
}
