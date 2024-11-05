import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                <li>
                    {genres.map((genres) => (
                        <li key={genres}>{genres}</li> // map 사용시 고유한 key 지정 필요
                    ))}
                </li>
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
