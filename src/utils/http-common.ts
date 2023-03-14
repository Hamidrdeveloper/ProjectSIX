import axios from "axios";
import { BASE_URL, TOKEN } from "./main";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json', 
    'HTTP_ACCEPT_LANGUAGE':'en',
    'referer': 'https://cleafin.shop',  
    'Origin': 'https://cleafin.shop',
    'Content-Type': 'application/json',
   ' X-PANEL':false
  }
});