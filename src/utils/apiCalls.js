import axios from "axios";

let { common, genres, apiKey } = require("./../config.json");

async function getTrailer(id, type) {
  const { data } = await axios.get(
    `${common}${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  const obj = data.results.find((o) => o.type.toLowerCase() === "trailer");
  return obj?.key;
}

async function getGenres(type) {
  const { data } = await axios.get(
    `${common}genre/${type}${genres}${process.env.REACT_APP_API_KEY}`
  );
  return data.genres;
}

async function getMedia(type, category, pageNo = 1) {
  const { data } = await axios.get(
    `${common}${category}/${type}${apiKey}${process.env.REACT_APP_API_KEY}&page=${pageNo}`
  );
  data.results.map(async (m) => (m.trailer = await getTrailer(m.id, category)));
  return data.results;
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

export { getGenres, getMedia, getActorBirthday };
