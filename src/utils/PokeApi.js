import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

/* --- Init axios instance --- */
const PokeApiAxiosInstance = axios.create({
    
});
const PokeApi = setupCache(
    PokeApiAxiosInstance,
    {
        debug: console.log
    }
);
/* --------------------------- */

export async function getPokemon(id) {
    const req = await PokeApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return req;
};

export async function getAllPokemons(limit, offset) {
    if(!limit) { limit = 20 };
    if(!offset) { offset = 0 };

    const req = await PokeApi.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const pokemonRequestCollection = req.data.results.map(
        async (pokemon) => (await PokeApi.get(pokemon.url)).data
    );

    req.data.results = await Promise.all(pokemonRequestCollection);

    return req;
};