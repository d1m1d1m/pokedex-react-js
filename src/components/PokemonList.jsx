import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    return (
        <ul className="overflow-y-scroll w-full grid grid-cols-3 gap-6 auto">
            {
                pokemons.map((currentPokemonData) => <PokemonCard key={currentPokemonData.id + currentPokemonData.name} {...currentPokemonData}/>)
            }
        </ul>
    );
};

export default PokemonList;