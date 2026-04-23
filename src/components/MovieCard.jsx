import "../css/MovieCard.css"

function MovieCard({movie}) {

    function onBestClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                 <button className="best-btn" onClick={onBestClick}>
                    💕
                </button> 
                <button className="watch-btn">
                    <a href="https://www.themoviedb.org">▶</a>
                </button>
            </div>
        </div>
        <div className="movie- discription">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard