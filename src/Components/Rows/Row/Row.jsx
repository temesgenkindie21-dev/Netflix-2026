import React, { useEffect, useState } from "react";
import axios from "../../utills/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error:", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }

    movieTrailer(
      movie?.title || movie?.name || movie?.original_name || ""
    )
      .then((url) => {
        if (!url) {
          console.log("No trailer found");
          return;
        }

        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log("Trailer Error:", error));
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const rowPoster =
    "w-full object-contain max-h-[100px] mr-[10px] transition-transform duration-300 hover:scale-105";

  const rowPosterLarge =
    "max-h-[250px] transition-transform duration-300 hover:scale-110";

  return (
    <div className="text-white ml-5">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>

      <div className="flex overflow-x-scroll overflow-y-hidden p-5 [&::-webkit-scrollbar]:hidden">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title || movie.name}
            className={`${rowPoster} ${
              isLargeRow ? rowPosterLarge : ""
            } cursor-pointer`}
          />
        ))}
      </div>

      {trailerUrl && (
        <div className="px-5 pb-5">
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default Row;