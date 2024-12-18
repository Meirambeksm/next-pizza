import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
}); /*25*/

// 22. Install axios: npm install axios
// 23. Go to .env
// 26. Go to products.ts
