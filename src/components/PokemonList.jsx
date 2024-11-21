import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, filterName }) => {
    return (
        <ul className="overflow-y-scroll w-full grid grid-cols-3 gap-6 auto">
            {
                pokemons.length ? pokemons.filter((p) => p.name.toLowerCase().trim().includes(filterName.toLowerCase())).map((currentPokemonData) => <PokemonCard key={currentPokemonData.id + currentPokemonData.name} {...currentPokemonData}/>) : "Pas de pokémons"
            }
        </ul>
    );
};

export default PokemonList;