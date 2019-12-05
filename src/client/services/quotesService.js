import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://rickandmorty-quotes.ielijose.now.sh/api',
  responseType: 'json',
});

function getRandomQuote() {
  return httpClient
    .get('/quotes')
    .then(res => {
      return res.data;
    })
    .catch(error => {
      throw error;
    });
}

export default {
  getRandomQuote,
};
