import { SearchIcon, SlidersVerticalIcon } from "lucide-react";
import { useState } from "react";
import RadioGroup from "./RadioGroup";
import PokemonTypes from "../constants/PokemonTypes";
import PokemonGeneration from "../constants/PokemonGenerations";
import { XIcon } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
    const [filter, setFilter] = useState({
        type: null,
        generation: null
    });

    function toggleAdvancedSearch() {
        setShowAdvancedSearch(!showAdvancedSearch);
    }

    return (
        <div className="overflow-hidden min-h-full w-full p-6 border-r">
            <label className="flex border w-full p-1.5 rounded-xl bg-slate-100" htmlFor="search">
                <input
                    id="search"
                    className="w-full bg-transparent outline-none pl-3"
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Pikachu, roucool, ..."
                />
                <button className="flex justify-center items-center bg-pokered-500 text-white p-2 rounded-lg">
                    <SearchIcon className="size-5" />
                </button>
            </label>

            <div className="bg-white">
                <h2 className="text-xl py-2 mt-6 mb-2 border-b">Types</h2>
                <RadioGroup
                    name="types"
                    items={PokemonTypes}
                    value={filter.type}
                    onChange={(typeValue) => setFilter({ ...filter, type: typeValue })}
                />

                <h2 className="text-xl py-2 mb-2 border-b">Génération</h2>
                <RadioGroup
                    name="types"
                    items={PokemonGeneration}
                    value={filter.generation}
                    onChange={(genValue) => setFilter({ ...filter, generation: parseInt(genValue) })}
                />

                <button onClick={() => {
                    const pokemon = JSON.parse(localStorage.getItem('pokemons'))
                    console.log(pokemon)
                }} className="bg-pokered-500 text-white px-6 py-2">Debug</button>
            </div>
        </div>
    );
}

export default SearchBar;