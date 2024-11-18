import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = axios.create();
export const PokeApi = setupCache(instance);