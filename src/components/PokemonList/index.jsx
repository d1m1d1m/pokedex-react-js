import './style.css'
import PokemonItem from '../PokemonItem';

const PokemonList = ({ pokemons }) => {
    return (
        <ul className="grid-cols-3 h-full">
            {
                pokemons.map((currentPokemon) => <PokemonItem {...currentPokemon}/>)
            }
        </ul>
    );
};
 
export default PokemonList;