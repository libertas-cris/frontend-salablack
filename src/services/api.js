import axios from "axios";

export const api = axios.create({
  baseURL: 'https://apinodesalablack.vercel.app/api'
})