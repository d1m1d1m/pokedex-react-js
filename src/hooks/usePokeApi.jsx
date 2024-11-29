import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { Pokemon } from "../api/PokeAPI";

/* --- Axios caching setup --- */
const apiInstance = axios.create();
export const CACHED_API = setupCache(apiInstance);

const fetchPokemon = async (url) => {
    const { data } = await CACHED_API.get(url);
    
    const pokemonList = data.results;
    const pokemonDataPromises = pokemonList.map(
        (pokemonResource) => CACHED_API.get(pokemonResource.url).then((res) => res.data)
    );

    const successFullData = await Promise.all(pokemonDataPromises);

    console.log(successFullData)

    return { ...data, results: successFullData.filter(p => p.is_default) };
};

const usePokeAPI = (url) => {
    return useQuery({
        queryKey: ['pokemons', url],
        queryFn: () => fetchPokemon(url)
    });
};

export default usePokeAPI;