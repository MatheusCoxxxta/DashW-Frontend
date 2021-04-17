/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.230.65.157:3333/api',
  headers: { 'Content-Type': 'application/json' }
});

export { api };
