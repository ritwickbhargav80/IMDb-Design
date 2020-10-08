import axios from "axios";

let { common, genres, apiKey } = require("./../config.json");

async function getTrailer(id, type) {
  const { data } = await axios.get(
    `${common}${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  const obj = data.results.find((o) => o.type.toLowerCase() === "trailer" && o.site.toLowerCase() === "youtube");
  return obj?.key;
}

function getPosterLink(poster_path) {
  return process.env.REACT_APP_API_LINK + poster_path;
}

async function getGenres(type) {
  const { data } = await axios.get(
    `${common}genre/${type}${genres}${process.env.REACT_APP_API_KEY}`
  );
  return data.genres;
}

async function getMedia(type, category, pageNo = 1, search = "") {
  let tempdata;
  if (search) {
    const { data } = await axios.get(
      `${common}${category}/${type}${apiKey}${process.env.REACT_APP_API_KEY}&query=${search}&page=${pageNo}`
    );
    tempdata = data;

    // tempdata.results.map(
    //   async (m) => (m.trailer = await getTrailer(m.id, type))
    // );
  } else {
    const { data } = await axios.get(
      `${common}${category}/${type}${apiKey}${process.env.REACT_APP_API_KEY}&page=${pageNo}`
    );
    tempdata = data;

    // tempdata.results.map(
    //   async (m) => (m.trailer = await getTrailer(m.id, category))
    // );
  }
  return tempdata.results.filter((data) => data.poster_path != null);
}

async function getTotalPages(type, category, pageNo = 1, search = "") {
  let tempdata;
  if (search) {
    const { data } = await axios.get(
      `${common}${category}/${type}${apiKey}${process.env.REACT_APP_API_KEY}&query=${search}&page=${pageNo}`
    );
    tempdata = data;
  } else {
    const { data } = await axios.get(
      `${common}${category}/${type}${apiKey}${process.env.REACT_APP_API_KEY}&page=${pageNo}`
    );
    tempdata = data;
  }
  return tempdata.total_pages;
}

async function getDetails(type, id) {
  const { data } = await axios.get(
    `${common}${type}/${id}${apiKey}${process.env.REACT_APP_API_KEY}`
  );

  // data.trailer = await getTrailer(id, type);

  return data;
}

async function getActorBirthday(date, month) {
  // const api = process.env.REACT_APP_ACTORS_API_KEY;
  // const headers = {
  //   "x-rapidapi-host": "imdb8.p.rapidapi.com",
  //   "x-rapidapi-key": api,
  // };
  // try {
  //   var {
  //     data: actorsId,
  //   } = await axios.get(
  //     `https://imdb8.p.rapidapi.com/actors/list-born-today?day=${date}&month=${month}`,
  //     { headers }
  //   );
  // } catch (err) {}
  // var arr = [];
  // actorsId.map(async (id) => {
  //   try {
  //     const {
  //       data: actor,
  //     } = await axios.get(
  //       `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${id
  //         .toString()
  //         .substring(6, 15)}`,
  //       { headers }
  //     );
  //     if (arr.find((elem) => elem.id === id) === undefined) arr.push(actor);
  //   } catch (e) {}
  // });
  // console.log(arr);
}

async function getCast(type, id) {
  const { data } = await axios.get(
    `${common}${type}/${id}/credits${apiKey}${process.env.REACT_APP_API_KEY}`
  );

  return data.cast.filter((data) => data.profile_path != null);
}

async function getKeywords(type, id) {
  const { data } = await axios.get(
    `${common}${type}/${id}/keywords${apiKey}${process.env.REACT_APP_API_KEY}`
  );

  return type === "movie" ? data.keywords : data.results;
}

async function getSimilarMovies(type, id) {
  const { data } = await axios.get(
    `${common}${type}/${id}/similar${apiKey}${process.env.REACT_APP_API_KEY}`
  );

  // data.results.map(async (m) => (m.trailer = await getTrailer(m.id, type)));

  return data.results.filter((data) => data.poster_path != null);
}

async function getRecommendations(type, id) {
  const { data } = await axios.get(
    `${common}${type}/${id}/recommendations${apiKey}${process.env.REACT_APP_API_KEY}`
  );

  // data.results.map(async (m) => (m.trailer = await getTrailer(m.id, type)));

  return data.results.filter((data) => data.poster_path != null);
}

async function getReviews(type, id) {
  const { data } = await axios.get(
    `${common}${type}/${id}/reviews${apiKey}${process.env.REACT_APP_API_KEY}`
  );

  return data.results;
}

export {
  getGenres,
  getTrailer,
  getPosterLink,
  getMedia,
  getTotalPages,
  getDetails,
  getActorBirthday,
  getCast,
  getKeywords,
  getSimilarMovies,
  getRecommendations,
  getReviews,
};
