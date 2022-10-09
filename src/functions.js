import axios from "axios";

async function getData(section) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${section}`,
    {
      params: {
        api_key: process.env.REACT_APP_KEY,
      },
    }
  );
  return response.data;
}
async function getDataByGenre(genreId) {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        api_key: process.env.REACT_APP_KEY,
        with_genres: genreId,
      },
    }
  );
  return response.data;
}
async function getDataById(id) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: process.env.REACT_APP_KEY,
      append_to_response: "videos",
    },
  });
  return response.data;
}

export { getData, getDataByGenre, getDataById };
