import axios from "axios";

export const api = axios.create({
  baseURL: "apinodesalablack.vercel.app/api"
})