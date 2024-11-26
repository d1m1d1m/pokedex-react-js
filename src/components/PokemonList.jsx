import PokemonCard from "./Pokemon/PokemonCard";

const PokemonList = ({ pokemons }) => {
    const pokemonSpecies = pokemons.filter((p) => p.is_default);

    if (pokemonSpecies.length === 0) return <p className="text-center text-gray-500">No Pokémon found.</p>;

    return (
        <ul className="overflow-y-scroll container h-screen p-6 flex flex-col gap-6 font-poppins scrollbar-hide">
            {pokemonSpecies.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
        </ul>
    );
};

export default PokemonList;