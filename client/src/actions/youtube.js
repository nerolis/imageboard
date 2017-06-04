import axios from 'axios';

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = "AIzaSyD91wPAG7bvn6X4Z0o69oNECsND2OuIAJ4";

export function fetchTube(term) {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };

  const request = axios.get(YOUTUBE_URL, { params: params });

  return {
    type: "fetch",
    payload: request
  };
}