function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    return <div id={id} className="movie card z-depth-0 black darken-4">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster === 'N/A' ? (
                    <img
                        className="activator"
                        src={`https://via.placeholder.com/300x400?text=${title}`} alt=""
                    />
                ) :
                    <img className="activator" src={poster} alt="" />
            }
        </div>
        <div className="card-content">
            <span className="card-title activator white-text"><h6><b>{title}</b></h6></span>
            <p className="white-text">{year} <span className="right">{type}</span></p>
        </div>
    </div>;
}
export { Movie };