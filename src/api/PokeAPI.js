import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = axios.create();
export const PokeApi = setupCache(instance);

export const fetchAllPokemons = async () => {
    const { data } = await PokeApi.get('https://pokeapi.co/api/v2/pokemon-species?limit=1025');

    const pokemonRequestsMap = data.results.map(
        async (resource) => {
            const pokemonUrl = resource.url.replace('-species','');
            const pokemonData = await PokeApi.get(pokemonUrl);
            return pokemonData.data;
        }
    );
    
    return Promise.all(pokemonRequestsMap);
};