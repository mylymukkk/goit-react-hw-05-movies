import axios from 'axios';

const MOVIES_API_KEY = '84c0cdd7fd9e4d5f8788ea3746d1dc48';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  const queryParams = new URLSearchParams({
    api_key: MOVIES_API_KEY,
  });
  const response = await axios.get(`/trending/movie/day?${queryParams}`);
  return response.data.results;
}

export async function getMovieById(MovieId) {
  const queryParams = new URLSearchParams({
    api_key: MOVIES_API_KEY,
  });
  const response = await axios.get(`/movie/${MovieId}?${queryParams}`);
  return response.data;
}

export async function getMoviesByQuery(query) {
  const queryParams = new URLSearchParams({
    api_key: MOVIES_API_KEY,
    query,
  });
  const response = await axios.get(`/search/movie?${queryParams}`);
  return response.data.results;
}

export async function getCastById(MovieId) {
  const queryParams = new URLSearchParams({
    api_key: MOVIES_API_KEY,
  });
  const response = await axios.get(`/movie/${MovieId}/credits?${queryParams}`);
  return response.data.cast;
}

export async function getReviewById(MovieId) {
  const queryParams = new URLSearchParams({
    api_key: MOVIES_API_KEY,
    language: 'en-US',
  });
  const response = await axios.get(`/movie/${MovieId}/reviews?${queryParams}`);
  return response.data.results;
}
