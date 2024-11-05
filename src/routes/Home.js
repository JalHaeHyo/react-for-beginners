import { createElement, useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // async-await 요청 값이 올때까지 함수를 일시정지 (then을 사용하지 않는 방식)
    const getMovies = async () => {
        const json = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        ).json();
        // const json = await response.json(); // 상단 코드에 await를 이중으로 하여 코드 제거 가능
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
