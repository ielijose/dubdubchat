import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  responseType: "json"
});

function getCharactersByPage(page) {
  return httpClient
    .get("/character", { params: { page } })
    .then(res => {
      return res.data;
    })
    .then(x => new Promise(resolve => setTimeout(() => resolve(x), 100)))

    .catch(error => {
      throw error;
    });
}

export default {
  getCharactersByPage
};
