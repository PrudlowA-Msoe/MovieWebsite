// src/api.ts
import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
});
export async function runQuery(slug: string) {
  const { data } = await api.get(`/query/${slug}`);
  return data;
}
