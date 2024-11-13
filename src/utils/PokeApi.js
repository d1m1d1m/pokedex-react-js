import axios from "axios";
import { setupCache } from "axios-cache-interceptor";



export const CLIENTS = {
    'pokemon': setupCache(axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon/'
    })),
    'types': setupCache(axios.create({
        baseURL: 'https://pokeapi.co/api/v2/type/'
    }))
};

export const FETCH_FILTERS = {
    'BY_POKEMON': useBaseUrl('pokemon'),
    'BY_SPECIES': useBaseUrl('pokemon-species'),
    'BY_GENERATION': useBaseUrl('generation'),
    'BY_TYPES': useBaseUrl('types')
};

function useBaseUrl(pathname) {
    return new URL(`https://pokeapi.co/api/v2/${pathname}`);
}

/* --- Init axios instance --- */
const PokeApiAxiosInstance = axios.create();
const PokeApi = setupCache(
    PokeApiAxiosInstance,
    {
        debug: console.log
    }
);
/* --------------------------- */

export async function getPokemons(filterName) {
    return await PokeApi.get(FETCH_FILTERS[filterName].href);
};

export async function getResource(endpointName) {
    const targetedClient = CLIENTS[endpointName];
    return await targetedClient.get('?limit=30');
};