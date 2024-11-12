import './App.css';
import { Fragment, useState, useEffect } from "react";

import { getAllPokemons } from "./utils/PokeApi";
import SearchBar from "./components/SearchBar";
import PokemonList from './components/PokemonList';

const App = () => {
    const [searchTerms, setSearchTerms] = useState('');
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getAllPokemons().then(({ data }) => setPokemons(data.results));
    }, []);

    return (
        <Fragment>
            <header className="container-fluid sticky bg-white top-0 shadow-lg shadow-grey-200">
                <div className="container mx-auto py-3">
                    <SearchBar
                        onInput={(e) => setSearchTerms(e.target.value)}
                    />
                    <div class="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto">
                        <input type='search' placeholder='Search Something...' class="w-full outline-none bg-white pl-4 text-sm" />
                        <button type='button'
                            class="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">Search</button>
                    </div>
                </div>
            </header>

            <main>
                <PokemonList pokemons={pokemons} />
            </main>
        </Fragment>
    );
}

export default App;