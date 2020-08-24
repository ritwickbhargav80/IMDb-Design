import axios from "axios";

let {
  common,
  genres,
  popularMovies,
  upcomingMovies,
} = require("./../config.json");

async function getTrailer(id) {
  const { data } = await axios.get(
    `${common}movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  const obj = data.results.find((o) => o.type.toLowerCase() === "trailer");
  return obj?.key;
}

async function getGenres() {
  const { data } = await axios.get(
    `${common}${genres}${process.env.REACT_APP_API_KEY}`
  );
  return data.genres;
}

function getGenreString(genre_ids, genres, rdate) {
  let str = "";

  genre_ids.map((m) => {
    str += genres.filter((g) => g.id === m)[0].name + ", ";
    return null;
  });

  str += rdate.slice(0, 4);
  return str;
}

async function getMovies(type) {
  const { data } = await axios.get(
    `${common}${
      type.toLowerCase() === "popular" ? popularMovies : upcomingMovies
    }${process.env.REACT_APP_API_KEY}`
  );
  data.results.map(async (m) => (m.trailer = await getTrailer(m.id)));
  return data.results;
}

export { getGenres, getGenreString, getMovies };
