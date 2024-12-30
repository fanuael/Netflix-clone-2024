// src/utils/axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // Base URL for TMDb API
});

export default instance;