import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
});

// Since frontend might not use tokens yet, we just provide the instance
// We can add interceptors here if needed in the future

export default api;
