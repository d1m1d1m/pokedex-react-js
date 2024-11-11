import { useState } from "react";
import { Fragment } from "react";
import SearchBar from "./components/SearchBar";
import './App.css';
import { useEffect } from "react";

const App = () => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        console.log(pokemon);
    }, [pokemon]);

    return (
        <Fragment>
            <header className="container">
                <SearchBar
                    onSubmit={(text) => {
                        fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
                        .then(r => r.json())
                        .then((data) => setPokemon(data))
                        .catch((e) => setPokemon(null));
                    }}
                />
            </header>

            <main>
                {
                    pokemon ?
                        <div>
                            <img src={pokemon.sprites.front_default} alt="" />
                        </div>
                    : <p>Le pokémon n'existe pas ...</p>
                }
            </main>
        </Fragment>
    );
}
 
export default App;