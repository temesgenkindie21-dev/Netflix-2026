import React, { useEffect, useState } from "react";
import axios from "../utills/axios";
import requests from "../utills/requests";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ],
        );
      } catch (error) {
        console.log("error", error);
      }
    })(); // <- execute the function
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substring(0, n - 1) + "..." : str;
  return (
    <div
      className="mt-[-10hv] h-[80hv] text-white -mb-20 object-contain"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="ml-[30px] pt-[300px]">
        <h1 className="text-5xl font-extrabold pb-1.5">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="my-1">
          <button className="cursor-pointer border-none outline-none font-bold text-xl mr-8 px-12 py-4 text-[#000] bg-[#fff] hover:text-[#000] hover:bg-[#c6c6c6] duration-200 ease-in">
            Play
          </button>
          <button className="cursor-pointer text-white border-none outline-none font-bold text-xl mr-8 px-12 py-4 bg-[rgba(51,51,51,0.5)] hover:text-[#000] hover:bg-[#c6c6c6] duration-200 ease-in">
            My List
          </button>
        </div>
        <h1 className="w-[45rem] px-4 text-[1rem] max-w-[360px] h-20">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="h-[40vh] bg-gradient-to-b from-transparent to[rgba(37,37,37,0.91)] to-[#111]" />
    </div>
  );
}

export default Banner;
