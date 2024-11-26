import { useQuery } from "@tanstack/react-query";
import { fetchAllPokemons } from "../api/PokeAPI";
import PokemonList from "./PokemonList";

const Pokedex = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ['pokemons'],
        queryFn: fetchAllPokemons
    });

    if (error) return <p>L'application rencontre une erreur : {error.message}</p>;
    if (isPending) return <p>Chargement en cours ...</p>;

    return (
        <PokemonList
            pokemons={data}
        />
    );
};

export default Pokedex;