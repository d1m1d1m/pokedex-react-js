import './style.css'
import PokemonItem from '../PokemonItem';

const PokemonList = ({ pokemons }) => {
    return (
        <ul className="pokemon-list">
            {
                pokemons.map((currentPokemon) => <PokemonItem {...currentPokemon}/>)
            }
        </ul>
    );
};
 
export default PokemonList;